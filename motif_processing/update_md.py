import csv
import os

def refined_extract_motifs_from_string(content):
    """Refined function to extract motifs from the .md file content."""
    start_motifs = content.find("motifs:\n  [")
    if start_motifs == -1:
        return None

    # Adjust starting point to after the '['
    start_motifs += len("motifs:\n  [")

    # Extract the section of the content between the starting point and ']\n---'
    end_motifs = content.find("]\n---", start_motifs)
    motifs_section = content[start_motifs:end_motifs]

    # Extract individual motifs and remove any surrounding whitespace or quotes
    motifs = [motif.strip(" '\n") for motif in motifs_section.split(",")]

    return motifs

def get_insight_from_csv(motif, mapping):
    """Get the general insight for a given motif using the CSV mapping."""
    return mapping.get(motif.strip(), None)

def update_md_file_without_yaml(file_path, mapping):
    """Update a given .md file with the insights based on its motifs using the refined method."""
    with open(file_path, 'r') as f:
        content = f.read()

        parts = content.split("---", 2)
        
        motifs = refined_extract_motifs_from_string(content)
        if not motifs:
            print(f"No motifs found for {file_path}")
            return

        insights = set()
        for motif in motifs:
            insight = get_insight_from_csv(motif, mapping)
            if insight:
                insights.add(insight)

        if insights:
            # Formatting the insights section with consistent spacing similar to the motifs
            insights_string = "\ninsights:\n  [\n" + ",\n".join([f"    '{insight}'" for insight in insights]) + "\n  ]\n---"
            
            print(f"Updating {file_path} with insights: {', '.join(insights)}")
            
            # Insert the insights into the front matter just before the closing '---'
            end_of_front_matter = content.find("---", content.find("---") + 3)  # Find the second '---'
            updated_content = content[:end_of_front_matter] + insights_string

            updated_content = updated_content + parts[2]
            
            with open(file_path, 'w') as f:
                f.write(updated_content)
        else:
            print(f"No insights found for {file_path}")

def read_csv_mappings(file_path):
    """Read the CSV file and return a dictionary of fine-grained motif to general motif mapping."""
    mapping = {}
    with open(file_path, 'r') as csvfile:
        reader = csv.reader(csvfile)
        next(reader)  # skip header
        for row in reader:
            mapping[row[0].strip()] = row[1].strip()
    return mapping

md_files_dir = "md_files"
csv_mapping_path = "mapped_motifs_bert_30.csv"
csv_mapping = read_csv_mappings(csv_mapping_path)

# Process the .md files using the loaded mapping
for filename in os.listdir(md_files_dir):
    if filename.endswith(".md"):
        update_md_file_without_yaml(os.path.join(md_files_dir, filename), csv_mapping)
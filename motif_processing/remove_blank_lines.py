import os

def remove_blank_lines_from_front_matter(file_path):
    """Remove blank lines from the front matter of the .md file."""
    with open(file_path, 'r') as f:
        content = f.read()

    # Find the front matter section
    start_of_front_matter = content.find("---")
    end_of_front_matter = content.find("---", start_of_front_matter + 3) + 3  # Including the second '---'
    front_matter = content[start_of_front_matter:end_of_front_matter]

    # Remove blank lines within the front matter
    cleaned_front_matter = "\n".join([line for line in front_matter.split("\n") if line.strip()])

    # Replace the original front matter with the cleaned one
    updated_content = content.replace(front_matter, cleaned_front_matter, 1)

    # Write the updated content back to the file
    with open(file_path, 'w') as f:
        f.write(updated_content)

md_files_dir = "md_files"

# Process the .md files
for filename in os.listdir(md_files_dir):
    if filename.endswith(".md"):
        remove_blank_lines_from_front_matter(os.path.join(md_files_dir, filename))
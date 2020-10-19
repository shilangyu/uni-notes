# file system (FS)

A mapping of abstract view of directories/files and the physical representation on disk.

## file

An object that can be written to and/or read from

### file attributes

- name - human readable name
- identifier - unique tag
- type - whether it's a directory, file extension etc (meta data; what to do with this file)
- location - pointer to the location on disk
- size - current size
- protection - access control (who can read, write, execute)
- time, date, and user identification - last read, creation date etc

### file operations

- create – create file
- write – store data to file
- read – retrieve data from file
- file seek – change current position
- delete – delete file
- truncate – change file size
- `fd = open(`$F_i$`)` – copies the entry to a $F_i$ file to main local memory
- `close(fd)` – copies the local entry of the file $F_i$ to the FS catalogue

## directories

### directory structure

Nowadays a tree structure:

- efficient searching
- grouping
- the idea of a current directory
- absolute and relative paths

### links

Directories can share files by hard and soft links.

A hard link points to the same contents as the file we are linking with. Changing the contents of either files will change it for the other one too.

Soft links (symlinks) are just a pointer to where the original file is. If the original file is removed, the symlink becomes a dangling pointer (points to something that no longer exists.)

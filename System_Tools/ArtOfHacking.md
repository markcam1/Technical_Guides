# The Art of Hacking 
Below we have tools and concepts from:
> _The Art of Hacking_ Erickson.

**objdump**: is a program for displaying various information about object files on Unix-like systems; [manual](https://sourceware.org/binutils/docs/binutils/objdump.html)

```
objdump -D a.out | grep -A20 main.:
```
**GDB**: the GNU Project [debugger](https://www.gnu.org/software/gdb/), allows you to see what is going on `inside' another program while it executes -- or what another program was doing at the moment it crashed.


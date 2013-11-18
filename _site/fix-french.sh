#!/bin/bash
for i in `find . -name '*.en.html'`;
    do cp -p $i ${i/en.html/fr.html};
done;

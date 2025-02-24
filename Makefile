# Copyright (C) 2025 Darshan(@thisisthedarshan)
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.

# Welcome to this Makefile! 🛠️ 
# It's here to automate the tedious, the repetitive, and the utterly boring parts of compiling.
# 
# If it works, I totally meant to do that.  
# If it doesn’t... well, that's what debugging is for. 😅  
# 
# Remember: Tabs are sacred here. Spaces? Blasphemy.  
# Now sit back, type `make`, and watch the magic happen! ✨


antlr=java -jar antlr.jar

cwd=$(shell pwd)

GRAMMAR_SRCS=./src/grammar/

license=/*\n \
 * Copyright (C) 2025 Darshan(@thisisthedarshan)\n \
 *\n \
 * This program is free software: you can redistribute it and/or modify\n \
 * it under the terms of the GNU General Public License as published by\n \
 * the Free Software Foundation, either version 3 of the License, or\n \
 * (at your option) any later version.\n \
 *\n \
 * This program is distributed in the hope that it will be useful,\n \
 * but WITHOUT ANY WARRANTY; without even the implied warranty of\n \
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n \
 * GNU General Public License for more details.\n \
 *\n \
 * You should have received a copy of the GNU General Public License\n \
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.\n \
 */

all: clean grammar source

# Just cleans the grammar files
clean:
	rm -f ./src/grammar/pss*.*								
	rm -f ./src/grammar/antlr/*.tokens 
	rm -f ./src/grammar/antlr/*.interp
	rm -f ./src/grammar/antlr/*.ts

# Cleans the grammar as well as the generated dist
distclean: clean
	rm -fr ./dist
	mkdir -p ./dist

# Builds the grammar
grammar:
	$(antlr) ./src/grammar/antlr/pss_lexer.g4 -Dlanguage=TypeScript -listener -visitor
	$(antlr) ./src/grammar/antlr/pss.g4 -Dlanguage=TypeScript -listener -visitor
	mv ./src/grammar/antlr/*.ts $(GRAMMAR_SRCS)
	$(MAKE) inject-license

# Builds source into dist directory
source:
	mkdir -p dist
	npm run build
	echo "#!/usr/bin/env node" | cat - "./dist/pss-langserver.js" > temp && mv temp "./dist/pss-langserver.js"

inject-license:
	@for file in $(GRAMMAR_SRCS)/*.ts; do \
		echo "$(license)" | cat - $$file > temp && mv temp $$file; \
	done

# Changmin Jung
17-years-old student,<br>
who likes to program and swim.

**Contact me**<br>
[instagram](https://instagram.com/hooss_only) | hoossonly@gmail.com

```c
#include <stdbool.h>
#include "ojbects/person"

#define MAYBE 0.5

int main() {
	CodeStyle code_style = {
		.tab = 2;
		.semicolon = true;
		.clean_code = MAYBE;
		.comments = "less comments but more redability";

	};

    char **skill_set = { "C", "Python", "Assembly?", "Javascript" }

	Person hooss = {
		.name = "Changmin Jung";
		.age = 17;
		.birth = "2007/02/13";
		.from = "Korea";
		.school = "Kyungpook National University High School";
		.tool = "neovim";
		.code_style = code_style;
        	.skill_set = skill_set;
	};
}
```

[go to my homepage](https://hooss-only.github.io/hooss-only/)

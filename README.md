# Changmin Jung
코딩하는 쿼카, Coding Quokka<br>
KNUHS student,<br>
who likes to code and swim.

**Contact me**<br>
[instagram](https://instagram.com/hooss_only) | hoossonly@gmail.com

**Be Sponsor**<br>
[github](https://github.com/sponsors/hooss-only) [ko-fi](https://ko-fi.com/hooss)

```c
#include <stdbool.h>
#include "ojbects/person"

int main() {
	CodeStyle code_style = {
		.tab = 8, // to prevent deep indent
		.semicolon = true,
		.clean_code = "working on it...",
		.comments = "less comments but more redability",

	};

    	char **skill_set = { "C", "Python", "Assembly" }

	Person hooss = {
		.name = "Changmin Jung",
		.age = 18,
		.birth = "2007/02/13",
		.from = "Korea",
		.school = "Kyungpook National University High School",
		.tool = "neovim & tmux",
		.code_style = code_style,
        	.skill_set = skill_set,
	};

	return 0;
}
```

[go to my homepage](https://hooss-only.github.io/hooss-only/)

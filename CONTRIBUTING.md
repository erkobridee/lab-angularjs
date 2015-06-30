# Contributing

- [Steps](#steps)
- [Commit Message Guidelines](#commit)
  - [Commit Message Format](commit-message-format)


## <a name="steps"></a> Steps

1. Fork it!

2. Create your feature branch: `git checkout -b my-new-feature`

3. Commit your changes: `git commit -m 'Add some feature'`

4. Push to the branch: `git push origin my-new-feature`

5. Submit a pull request :D

English is the universal language nowadays, so please don't create or comment on issues using another language.


## <a name="commit"></a> Git Commit Guidelines

This leads to **more readable messages** that are easy to follow when looking through the **project history**.

* A detailed explanation can be found in this [document: commit message format](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#).

* Based on [[GitHub] angular / angular.js - CONTRIBUTING commit](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit)

* [[GitHub] robertmesserle / conventional-changelog](https://github.com/robertmesserle/conventional-changelog) - use git commit messages to **generate** the Changelog document


### <a name="commit-message-format"></a> Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```html
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

> Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on github as well as in various git tools.

#### Type

Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug or adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation


#### Scope

The scope could be anything specifying place of the commit change. For example `$location`,
`$browser`, `$compile`, `$rootScope`, `ngHref`, `ngClick`, `ngView`, etc...


#### Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end


#### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes"
The body should include the motivation for the change and contrast this with previous behavior.


#### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

> **Breaking Changes** are detected as such if the footer contains a line starting with BREAKING CHANGE: (with optional newlines) The rest of the commit message is then used for this.


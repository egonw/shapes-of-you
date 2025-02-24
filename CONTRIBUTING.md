# Contributing 👩‍💻

When contributing to this repository, please first discuss the change you wish to make via an [issue](https://github.com/vemonet/shapes-of-you/issues) if applicable.

To contribute:

1. [Fork this repository](https://github.com/vemonet/shapes-of-you/fork) 🍴

2. Clone the repository 📥

```bash
git clone https://github.com/vemonet/shapes-of-you.git
cd shapes-of-you
```

3. Create a new branch from the `main` branch, and go to this branch 🕊️

```bash
git checkout -b my-branch
```

4. Run the API in development on http://localhost:19006 🛩

```bash
yarn install
yarn dev
```

5. Add your changes in this branch 🦜
6. Send a pull request to the `main` branch when your changes are done 📤

## Pull request process ✔️

1. Before sending a pull request, make sure the project still work as expected with the new changes properly integrated 🛫
2. [Send a pull request](https://github.com/vemonet/shapes-of-you/compare) to the `main` branch 📤
3. Project contributors will review your change, and answer the pull request as soon as they can ✔️

## Planned improvements ➕

- [x] Improve filtering and faceted search for shapes (feedbacks welcome! cf. [issue#5](https://github.com/vemonet/shapes-of-you/issues/5))
- [x] Index more types of files: OWL, SKOS, OBO, RML and YARRRML
- [ ] Integrate datasets from the Linked Open Data Cloud: https://lod-cloud.net/lod-data.json
  - [ ] Retrieve infos about available SPARQL endpoints and downloadable datasets. Use `dcat:Dataset` class? Should we attach SPARQL endpoints to `dcat:Dataset` when the 2 are related?
  - [ ] We could try to automatically link as much as possible the data models (e.g. OWL, SHACL, queries) to the existing data
- [ ] Add page for each file: download the file, parse it with JavaScript, and display relevant infos: metadata, classes, properties, instances, subClassOf hierarchy...
- [ ] Filtering/categorizing files/repositories based on categories? Could be GitHub topics to start (e.g. only show most popular topics, and filter). 
- [ ] Improve parsing of ShEx files to retrieve the defined shapes and their metadata (if possible)
- [ ] Star shapes files with your SOLID account, cf. [issue#3](https://github.com/vemonet/shapes-of-you/issues/3)
- [ ] Store the data as [Nanopublications](http://nanopub.org/wordpress/), instead of requiring the deployment of a triplestore
- [ ] Use PWA to store data: check if [PWA](https://web.dev/progressive-web-apps) would allow to store the web app SPARQL data (to avoid querying everytime, we can update quietly in the background). See [this article about storing data using a PWA](https://www.monterail.com/blog/pwa-offline-dynamic-data).
- [ ] Regex search filter? If requested

> Feel free to comment on this plan, or propose new improvements by [creating an issue](https://github.com/vemonet/shapes-of-you/issues) in this GitHub repository.

## Maintenance notices 🔧

Potential future maintenance issues, and how to fix them:

* GitHub/GitLab/Gitee APIs could change, or get deprecated in the future. Updating to a new API will not be hard though, as we just rely on it to list the interesting repos for a topic, and get some basic metadata. The rest is done by `git clone`. Checkout the `fetch_from_` functions in the `etl/index-shapes.py` file to change the different services API queries and logic.
* GitHub/GitLab/Gitee raw file URL model could change. We just need to change the `generate_github_file_url` function in `etl/index-shapes.py` to adapt it to the new URL.

## Security notices 🛡

Some things to take into consideration if you are running this system:

* Use API tokens with minimal permissions granted for git services (to avoid publicly indexing your own private repositories)
* Do not use one of your regular password for the triplestore stored as secret.
* Prefer using GitHub runners, than sensible self-hosted runners, to run the GitHub Actions workflows.
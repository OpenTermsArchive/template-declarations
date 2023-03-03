# Open Terms Archive - ${instanceName} services

These services declarations are maintained by ${instanceMaintainer} and tracked on [Open Terms Archive](https://opentermsarchive.org).

These service declarations are consumed by the [Open Terms Archive engine](https://github.com/OpenTermsArchive/engine). See the Open Terms Archive [contribution guidelines](https://github.com/OpenTermsArchive/contrib-declarations/blob/main/CONTRIBUTING.md) to learn how to add and update services or documents.

You can [explore the tracked versions](https://github.com/OpenTermsArchive/${instanceName}-versions) interactively or [download them as a dataset](https://github.com/OpenTermsArchive/${instanceName}-versions/releases) in the `OpenTermsArchive/${instanceName}-versions` repository.

## Scope

The documents declared in this repository are:

- ...
## Available CLI commands

### `npm run lint`

Display errors of incorrectly formatted declarations.

See [documentation](https://github.com/OpenTermsArchive/engine#ota-lint).

### `npm run lint:fix`

Apply linting on all declarations.

See [documentation](https://github.com/OpenTermsArchive/engine#ota-lint).

### `npm run test`

Check that all declarations allow recording a snapshot and a version properly.

See [documentation](https://github.com/OpenTermsArchive/engine#ota-validate).

### `npm run test:schema`

Check that all declarations are readable by the engine.

See [documentation](https://github.com/OpenTermsArchive/engine#validate-schema-only).

### `npm run test:modified`

Run `npm run test` only on declarations changed and commited in Git.

See [documentation](https://github.com/OpenTermsArchive/engine#validate-modified-terms-only).

### `npm run start`

Track terms according to provided declarations.

See [documentation](https://github.com/OpenTermsArchive/engine#ota-track).

### `npm run start:schedule`

Track terms four times a day.

See [documentation](https://github.com/OpenTermsArchive/engine#track-documents-four-times-a-day).

### `npm run start:modified`

Launch `npm run start` only on declarations changed and commited in Git.

### `npm run dataset`

Export and publish the versions dataset.

See [documentation](https://github.com/OpenTermsArchive/engine#ota-dataset).

### `npm run dataset:schedule`

Export and publish the versions dataset every monday.

See [documentation](https://github.com/OpenTermsArchive/engine#publish-dataset-on-monday-every-week).

## Contributing

To add or update documents, see the [reference documentation](https://github.com/OpenTermsArchive/engine/blob/main/CONTRIBUTING.md).


- - - -

## License

The code in this repository is distributed under the GNU Affero General Public Licence (AGPL) v3.0.

# Open Terms Archive - ${instanceName} services

These services declarations are maintained by ${instanceMaintainer} and tracked on [Open Terms Archive](https://opentermsarchive.org).

These service declarations are consumed by the [Open Terms Archive engine](https://github.com/ambanum/OpenTermsArchive). See the Open Terms Archive [contribution guidelines](https://github.com/OpenTermsArchive/contrib-declarations/blob/main/CONTRIBUTING.md) to learn how to add and update services or documents.

You can [explore the tracked versions](https://github.com/OpenTermsArchive/${instanceName}-versions) interactively or [download them as a dataset](https://github.com/OpenTermsArchive/${instanceName}-versions/releases) in the `OpenTermsArchive/${instanceName}-versions` repository.

## Scope

The documents declared in this repository are:

- ...

## Deployment

For continuous deployment on your server, you need to define the following variables as [GitHub secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository):

- `SERVER_FINGERPRINT`: obtained with `ssh-keyscan -H $serverAddress`.
- `SERVER_SSH_KEY`: a private SSH key allowed to connect to your server.
> You can for example generate one on your server with `ssh-keygen -q -N "" -f ~/.ssh/ota-deploy && cat ~/.ssh/ota-deploy.pub >> authorized_keys`, and store the contents of `~/.ssh/ota-deploy` as the `SERVER_SSH_KEY` secret.
## Contributing

See [contrib-declarations repository](https://github.com/OpenTermsArchive/contrib-declarations/blob/main/CONTRIBUTING.md) to have explanations on how to add and update services or documents.


- - - -

## License

The code in this repository is distributed under the GNU Affero General Public Licence (AGPL) v3.0.

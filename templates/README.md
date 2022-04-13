# Open Terms Archive - ${instanceName} services

These services declarations are maintained by ${instanceMaintainer} and tracked on [Open Terms Archive](https://opentermsarchive.org).

These service declarations are consumed by the [Open Terms Archive engine](https://github.com/ambanum/OpenTermsArchive). See the Open Terms Archive [contribution guidelines](https://github.com/OpenTermsArchive/contrib-declarations/blob/main/CONTRIBUTING.md) to learn how to add and update services or documents.

You can [explore the tracked versions](https://github.com/OpenTermsArchive/${instanceName}-versions) interactively or [download them as a dataset](https://github.com/OpenTermsArchive/${instanceName}-versions/releases) in the `OpenTermsArchive/${instanceName}-versions` repository.

## Scope

The documents declared in this repository are:

- ...

## Deployment

For deployment to occur correctly, you need to setup [Github secrets](https://docs.github.com/en/enterprise-cloud@latest/actions/security-guides/encrypted-secrets) with the following names

- `SERVER_FINGERPRINT` Generate it on the target server with `ssh-keygen -t rsa -b 4096 -C "$email" and then cat $nameofthefile.pub >> authorized_keys`
- `SERVER_SSH_KEY` Generate with `ssh-keyscan -H $targetServerIpAddress`

## Contributing

See [contrib-declarations repository](https://github.com/OpenTermsArchive/contrib-declarations/blob/main/CONTRIBUTING.md) to have explanations on how to add and update services or documents.


- - - -

## License

The code in this repository is distributed under the GNU Affero General Public Licence (AGPL) v3.0.

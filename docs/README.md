# Build-Your-Own Template

Talon Build-Your-Own (BYO) template for [Lightning Web Runtime](https://git.soma.salesforce.com/communities/webruntime)-based Communities!

### Overview
This repository holds the template definitions and off-core testing aspects of the Talon BYO template. [`webruntime-template-integration`](https://git.soma.salesforce.com/communities/webruntime-template-integration) fetches the template definitions from the [Nexus npm repository](https://nexus.soma.salesforce.com/nexus/content/repositories/npmjs-internal/) and pushes it to Core.

For more info on Communities Lightning Webruntime templates, see our [Confluence](https://confluence.internal.salesforce.com/x/34nvD).

### Setup
1. [Working with Git and Github](https://confluence.internal.salesforce.com/x/M0HRD)
2. Make sure that you have all the [prerequisites](https://confluence.internal.salesforce.com/x/M0HRD).
3. Run `yarn install`.

### Testing your changes locally
1. Run `yarn run start`
2. If you need to connect to data on Core, run `RECORD_API_CALLS=true API_ENDPOINT=<community-url-including-slash-s>/api/ npm run start`

### Publishing your changes
1. [Merge](Git.md#merge-your-pull-request) your changes to master
2. Confirm the CI passes for your merge
3. Go to [Communities SFCI](https://communitiesci.dop.sfdc.net/job/communities/job/talon-template-byo/job/master/)
4. Click on `Build with Parameters`
5. Check `NPM_PUBLISH` and wait for the build to finish

### Update the template integration mechanism
1. In order to get your template changes to core, you will need to [follow these instructions](https://git.soma.salesforce.com/communities/webruntime-template-integration#updating--adding-your-template) in order to reference the updated version of your template.

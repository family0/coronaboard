const SheetApiClientFactory = require('./sheet_api_client_factory');
const SheetDownloader = require('./sheet_downloader');

async function main() {
    try {
        const SheetApiClient = await SheetApiClientFactory.create();
        const downloader = new SheetDownloader(SheetApiClient);
        const spreadsheetId = '176kFLNw84AAIJWxA-_8U3qsVvIaqbwcOgxdNWkBriVw';
        const notice = await downloader.downloadToJson(spreadsheetId, 'notice', 'download/notice.json');
        console.log(notice);

        const countryInfo = await downloader.downloadToJson(spreadsheetId, 'countryInfo', 'download/countryInfo.json');
        console.log(countryInfo);
    } catch (e) {
        console.error(e);
    }
}

main();
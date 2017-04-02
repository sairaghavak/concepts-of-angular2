export class Constants {

    private static LINE_SEPARATOR: string = "/";

    private static GIST_USERNAME = "sairaghavak"; // Gist username

    // Gist Id
    private static GIST_MODULE_UNIQUE_ID = "ce7c2dde0d7b2291590fb309e979033e";

    /**
     *  Returns the Github Gist link as username/uniqueId
     */
    public static getModuleGistId() {
        return Constants.GIST_USERNAME + Constants.LINE_SEPARATOR + Constants.GIST_MODULE_UNIQUE_ID;
    }
}
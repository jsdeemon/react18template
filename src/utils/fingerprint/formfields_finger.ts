export function fingerprint_formfields() {
   
    let i: number, j: number, numOfForms: number, numOfInputs: number, strFormsInPage: any, strFormsInputsData: any, strInputsInForm: any, strTmp: string, strOut: string;

    i = 0;
    j = 0;
    numOfForms = 0;
    numOfInputs = 0;
    strFormsInPage = "";
    strFormsInputsData = [];
    strInputsInForm = "";
    strTmp = "";
    strOut = "";

    strFormsInPage = document.getElementsByTagName('form');
    numOfForms = strFormsInPage.length;
    strFormsInputsData.push("url=" + window.location.href);
    for (i = 0; i < numOfForms; i = i + 1) {
        strFormsInputsData.push("FORM=" + strFormsInPage[i].name);
        strInputsInForm = strFormsInPage[i].getElementsByTagName('input');
        numOfInputs = strInputsInForm.length;
        for (j = 0; j < numOfInputs; j = j + 1) {
            if (strInputsInForm[j].type !== "hidden") {
                strFormsInputsData.push("Input=" + strInputsInForm[j].name);
            }
        }
    }
    strTmp = strFormsInputsData.join("|");
    strOut = strTmp;
    return strOut;
}
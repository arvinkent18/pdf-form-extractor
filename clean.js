let fs = require('fs');
const decode = require('urldecode');
let source = process.argv[2];
let destination = process.argv[3];

if (!source || !destination) {
    console.log('Source and destination required.');
}
let data = fs.readFileSync(source);
let json = JSON.parse(data);
let extractedData = [];
pages = json.formImage.Pages;
let amount = '';
let interestRate = '';
let noOfMonths = '';
let propertyAddress = '';
let legalDescription = '';
let borrowerName = '';
let socialSecurityNumber = '';
let provincialAddress = '';
let coBorrowerName = '';
let coSocialSecurityNumber = '';
let coProvincialAddress = '';
let purchasePrice = '';
let estimatedPrepaidItems = '';
let estimatedClosingCost = '';
let totalCost = '';
let otherCredits = '';
let loanAmountExcludedPMI = '';
let cashFromToBorrower = '';
let loanAmountMN = '';
let checkingAccount = '';
let savingAccount = '';
let totalAssets = '';
let netWorth = '';
let totalIncome = '';
let presentMonthlyExpense = '';
let proposedMonthlyExpense = '';

pages.forEach(p => {
    p.Texts.forEach(t => {
        if (t.x === 1.438 && t.y === 11.575 && t.w === 40.5) {
            amount = decode(t.R[0].T);
        }
        if (t.x === 8.5 && t.y === 11.575 && t.w === 20.25) {
            interestRate = decode(t.R[0].T);
        }
        if (t.x === 12.875 && t.y === 11.575 && t.w === 13.5) {
            noOfMonths = decode(t.R[0].T);
        }
        if (t.x === 1.5 && t.y === 13.688 && t.w === 130.995) {
            propertyAddress = decode(t.R[0].T);
        }
        if (t.x === 1.438 && t.y === 15.325 && t.w === 64.233) {
            legalDescription = decode(t.R[0].T);
        }
        if (t.x === 1.5 && t.y === 29.375 && t.w === 72.747) {
            borrowerName = decode(t.R[0].T);
        }
        if (t.x === 1.5 && t.y === 31.563000000000002 && t.w === 46.494) {
            socialSecurityNumber = decode(t.R[0].T);
        }
        if (t.x === 1.5 && t.y === 34.813 && t.w === 153.495) {
            provincialAddress = decode(t.R[0].T);
        }
        if (t.x === 18.938 && t.y === 29.375 && t.w === 75.231) {
            coBorrowerName = decode(t.R[0].T);
        }
        if (t.x === 18.938 && t.y === 31.563000000000002 && t.w === 46.494) {
            coSocialSecurityNumber = decode(t.R[0].T);
        }
        if (t.x === 19.125 && t.y === 34.813 && t.w === 153.495) {
            coProvincialAddress = decode(t.R[0].T);
        }
        if (t.x === 10.625 && t.y === 37.031 && t.w === 40.5) {
            purchasePrice = decode(t.R[0].T);
        }
        if (t.x === 10.375 && t.y === 41.5 && t.w === 36) {
            estimatedPrepaidItems  = decode(t.R[0].T);
        }
        if (t.x === 10.375 && t.y === 42.375 && t.w === 36) {
            estimatedClosingCost  = decode(t.R[0].T);
        }
        if (t.x === 10.375 && t.y === 45.625 && t.w === 45) {
            totalCost  = decode(t.R[0].T);
        }
        if (t.x === 9.25 && t.y === 8.5 && t.w === 29.25) {
            otherCredits  = decode(t.R[0].T);
        }
        if (t.x === 9.25 && t.y === 10.313 && t.w === 45) {
            loanAmountExcludedPMI  = decode(t.R[0].T);
        }
        if (t.x === 9.25 && t.y === 13.938 && t.w === 45) {
            loanAmountMN  = decode(t.R[0].T);
        }
        if (t.x === 9.25 && t.y === 15.937999999999999 && t.w === 40.5) {
            cashFromToBorrower  = decode(t.R[0].T);
        }
        if (t.x === 9.188 && t.y === 38.313 && t.w === 40.5) {
            checkingAccount  = decode(t.R[0].T);
        }
        if (t.x === 9.188 && t.y === 41.688 && t.w === 36) {
            savingAccount  = decode(t.R[0].T);
        }
        if (t.x === 9.188 && t.y === 41.688 && t.w === 36) {
            checkingAccount  = decode(t.R[0].T);
        }
        if (t.x === 9.125 && t.y === 22 && t.w === 36) {
            totalAssets  = decode(t.R[0].T);
        }
        if (t.x === 20.063 && t.y === 22.125 && t.w === 36) {
            netWorth  = decode(t.R[0].T);
        }
        if (t.x === 16.188 && t.y === 20.688 && t.w === 31.5) {
            totalIncome  = decode(t.R[0].T);
        }
        if (t.x === 27.75 && t.y === 20.688 && t.w === 24.75) {
            presentMonthlyExpense  = decode(t.R[0].T);
        }
        if (t.x === 32.563 && t.y === 20.688 && t.w === 31.5) {
            proposedMonthlyExpense  = decode(t.R[0].T);
        }
        if (t.x === 26 && t.y === 5.188 && t.w === 29.745) {
            proposedMonthlyExpense  = decode(t.R[0].T);
        }
        if (amount
            && interestRate
            && noOfMonths
            && propertyAddress
            && legalDescription
            && borrowerName
            && socialSecurityNumber
            && provincialAddress
            && coBorrowerName
            && coSocialSecurityNumber
            && coProvincialAddress
            && purchasePrice
            && estimatedPrepaidItems
            && estimatedClosingCost
            && totalCost
            && otherCredits
            && loanAmountExcludedPMI
            && cashFromToBorrower
            && loanAmountMN
            && checkingAccount
            && savingAccount
            && totalAssets
            && netWorth
            && totalIncome
            && presentMonthlyExpense
            && proposedMonthlyExpense
            && caseNumber
            ) {
            extractedData.push({
                amount,
                interestRate,
                noOfMonths,
                propertyAddress,
                legalDescription,
                borrowerName,
                socialSecurityNumber,
                provincialAddress,
                coBorrowerName,
                coSocialSecurityNumber,
                coProvincialAddress,
                purchasePrice,
                estimatedPrepaidItems,
                estimatedClosingCost,
                totalCost,
                otherCredits,
                loanAmountExcludedPMI,
                cashFromToBorrower,
                loanAmountMN,
                checkingAccount,
                savingAccount,
                totalAssets,
                netWorth,
                totalIncome,
                presentMonthlyExpense,
                proposedMonthlyExpense,
                caseNumber,
            });
            interestRate = '';
            noOfMonths = '';
            propertyAddress = '';
            legalDescription = '';
            borrowerName = '';
            socialSecurityNumber = '';
            provincialAddress = '';
            coBorrowerName = '';
            coSocialSecurityNumber = '';
            coProvincialAddress = '';
            purchasePrice = '';
            estimatedPrepaidItems = '';
            estimatedClosingCost = '';
            totalCost = '';
            otherCredits = '';
            loanAmountExcludedPMI = '';
            cashFromToBorrower = '';
            loanAmountMN = '';
            checkingAccount = '';
            savingAccount = '';
            totalAssets = '';
            netWorth = '';
            totalIncome = '';
        }
    });
});

fs.writeFileSync(destination, JSON.stringify(extractedData));
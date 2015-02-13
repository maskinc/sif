var mongoose = require('mongoose');

var supplierSchema = new mongoose.Schema({
      supplier_name:  String
    , supplier_type: String
    , validated_source: String
    , legal_entity: String
    , web_site: String
    , exp_spend: Number
    , alternate_name: String
    , tax_id: String
    , supplier_no: String
    , com_registration: String
    , payment_terms: String
    , buy_commodity: String
    , reselling: String
    , status : String
    , address_book: {
    	  country: String
    	, address_name: String
    	, add_line1: String
    	, add_line2: String
    	, add_line3: String
    	, city: String
    	, county: String
    	, state: String
    	, postal_code: String
       }
    , contact: {
    	  first_name: String
    	, last_name: String
    	, phone: String
    	, email: String
    	, fax: String
    	, title: String
    	, department: String
      } 
    , supplierSiteName : String
    , rivermine: String
    , DistrSetName : String
    , WithholdingTax: String
    , WithholdingType: String
    , taxReportingName: String
    , orgType: String
    , w9: String
    , w8ben: String
    , federalReportable: String
    , taxReportingType: String
    , taxReportingSite: String
    , paymentMethod: String
    , remitEmail: String
    , invoiceCurrency: String
    , paymentCurrency: String
    , payGroup: String
    , deliveryChannel: String
    , payModeID: String
    , swift: String
    , iban: String
    , bankName: String
    , branchName: String
    , beneficiary: String
    , abaNumber: String
    , accountNumber: String
    , sortCode: String
    , bankCode: String
    , intlPayments: String
    , createdBy: String
    });

module.exports = mongoose.model('Suppliers', supplierSchema);
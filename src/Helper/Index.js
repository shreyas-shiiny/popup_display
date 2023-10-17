let fn = {};
let aadharregex = new RegExp(/^\d{12}$/);
let panregex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
let emailregex = new RegExp(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/);

fn.validateaadhar = (val) => {
    let _isvalid = aadharregex.test(val);
    if (_isvalid) {
        return true;
    } else {
        return false;
    }
};


fn.validatePhoneNumber = (val) => {
    // let _isvalid= val;
    if (val.toString().length === 10) {
        return true;
    } else {
        return false;
    }
};

fn.validatepassword = (Password, ConfirmPassword) => {
    if (Password === ConfirmPassword) {
        return true;
    } else {
        return false;
    }
};

fn.validatepan = (val) => {
    let _isvalid = panregex.test(val);
    if (_isvalid) {
        return true;
    } else {
        return false;
    }
};

fn.validateemail = (val) => {
    let _isvalid = emailregex.test(val);
    if (_isvalid) {
        return true;
    } else {
        return false;
    }
};

fn.AcceptedChars = (e, type) => {
    // debugger;
    let evt = e ? e : window.event;
    var charCode = evt.which ? evt.which : evt.keyCode;

    var defaCodes = [8, 9, 13];
    var digitCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

    if (
        type === "NAME" ||
        type === "EMAIL" ||
        type === "PAN" ||
        type === "VOTERID"
    )
        return true;
    if (type === "TEXT") {
        if (digitCodes.indexOf(charCode) > -1) {
            e.preventDefault();
            return false;
        }
        return true;
    } else if (type === "PHONE" || type === "NUMBERS" || type === "AADHAR") {
        Array.prototype.push.apply(defaCodes, digitCodes);
        Array.prototype.push.apply(defaCodes, [32, 40, 41, 45]);
    }
    if (defaCodes.indexOf(charCode) === -1) {
        e.preventDefault();
        return false;
    }


    return true;
};

export default fn;
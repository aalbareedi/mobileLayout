let html = document.getElementsByTagName("html")[0];
let body = document.getElementsByTagName("body")[0];
let wrapper = document.getElementById("wrapper");
let scrollingElement =
  document.scrollingElement || document.documentElement || body;
let mainDock = document.getElementById("mainDock");
let navbar = document.getElementById("navbar");
let navToggleBtn = document.getElementById("navToggleBtn");
let navToggleIcon = document.getElementById("navToggleIcon");
let navMenu = document.getElementById("navMenu");
let messageBtn = document.getElementById("messageBtn");
let contactForm = document.getElementById("contactForm");
let contactFormCancelBtn = document.getElementById("formCancelBtn");
let contactFormBackArrow = document.getElementById("backArrow");
let contactFormButtonsBar = document.getElementById("formButtons");
let contactFormSubmitBtn = document.getElementById("contactFormSubmitBtn");
let formInputFields = document.querySelectorAll("input, textarea");
let contactFormNameInput = document.getElementById("nameInput");
let contactFormEmailInput = document.getElementById("emailInput");
let contactFormPhoneInput = document.getElementById("phoneInput");
let contactFormMessageInput = document.getElementById("messageInput");
let backToTopBtn = document.getElementById("backToTopBtn");
let stats = document.getElementById("stats");
let statYear = document.getElementById("statYear");
let statCases = document.getElementById("statCases");
let statPercent = document.getElementById("statPercent");
let navOverlay = document.getElementById("navOverlay");
let formOverlay = document.getElementById("formOverlay");
let confirmWindow = document.getElementById("confirmWindow");
let main = document.querySelector("main");
let navMenuOpt = document.getElementsByClassName("navMenuOpt");
let dockContactBtns = document.getElementsByClassName("dockContactBtn");
let navSocialMediaBtns = document.getElementsByClassName("navSocialMediaBtn");

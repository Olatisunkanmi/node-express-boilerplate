module.exports = {
  RODNAV_RUNNING: "RODNAV is running on PORT",
  SUCCESS: "success",

  TRANSACTION_RESPONSE: "Balance Retrieved",
  TRANSACTION_LIST_RESPONSE: "Transaction History Retrieved",
  FAIL: "fail",
  v1: "/api/v1",
  EMAIL_CONFLICT: "A user with your email already exists",
  THIRD_PARTY_ERROR: "Error From Third Party Api",
  WELCOME:
    "Welcome to RODNAV, a platform that allows you connect with driver and what not",
  INVALID_CREDENTIALS: "Incorrect login details",
  INVALID_PERMISSION: "Permission denied. Invalid credentials provided",
  INVALID_ACCOUNT_NO: "Invalid account NO",
  USER_SIGNUP_ERROR: "Error creating account",
  USER_SIGNUP_SUCCESS: "Account created successfully",
  MODULE_ERROR_STATUS: "MODULE_PROCESS_BROKE",
  MODULE_ERROR: "A module error occurred",
  DB_SUCCESS: "Database connected",
  DB_ERROR_STATUS: "DB_PROCESS_FAILED",
  DB_ERROR: "A database error occurred",
  FORBIDDEN: "Access forbidden. You do not have the required access.",
  CAMPAIGN_NOT_FOUND: "Campaign not found",
  CAMPAIGN_NOT_ACTIVE: "Campaign not active",
  CAMPAIGNS_NIL: "No campaigns found for this user",
  CREATE_USER_ERROR: "Error creating user",
  NOT_ALLOWED: "You are not allowed to perform this action",
  CREATE_USER_SUCCESS: "Created user successfully",
  CHAINAMB_CHAIN_ERROR: "Campaign already chained by You",
  CREATE_CAMPAIGN_ERROR: "Error creating campaign",
  FETCH_CAMPAIGN_ERROR: "Error fetching campaign",
  CAMPAIGN_CREATED: "Campaign created successfully",
  CHAIN_NOT_ALLOWED: "You are not allowed to chain this campaign",
  CAMPAIGN_TITLE_EXIST: "Campaign title exists already",
  CHAIN_SUCCESS: "You have successfully chained this campaign",
  FETCH_CHAINED_CAMPAIGNS_SUCCESS: "Chained campaigns fetched successfully",
  NO_CHAINED_CAMPAIGNS: "No Chained campaigns found",
  USER_CHAIN_ERROR: "Cannot chain campaign created by you",
  USER_ALREADY_EXIST: "USER exists already",
  USERNAME_ALREADY_EXIST: "USERNAME exists already",
  USER_EXIST_VERIFICATION_FAIL: "USER_EMAIL_EXIST_VERIFICATION_FAIL",
  USER_EMAIL_EXIST_VERIFICATION_FAIL: "USER_EMAIL_EXIST_VERIFICATION_FAIL",
  USER_EMAIL_EXIST_VERIFICATION_FAIL_MSG:
    "Login failed. It is not you, it is us.",
  INTERNAL_SERVER_ERROR: "Oops, something broke on the server!!!",
  LOGIN_USER_SUCCESSFULLY: "Login Successful",
  INVALID_EMAIL: "This email does not exist, please enter a registered email",
  USER_NOT_FOUND: "User not found",
  ERROR_FETCHING_USER: "Error fetching user",
  ERROR_VERIFYING_USER: "ERROR VERIFYING USER",
  ERROR_VERIFYING_USER_MSG:
    "Error trying to verify user. It is not you, it is us.",
  NOT_FOUND_API: "Oops, You have reached a dead end",
  ACCESS_REVOKED: "ACCESS REVOKED",
  AUTH_REQUIRED: "Access denied,a valid access token is required",
  CHARGE_INITIATION_SUCCESS: "Charge intitiation successful",
  CHARGE_INITIATION_FAILED: "Charge intitiation failed",
  CARD_CHARGE_SUCCESS: "Card transaction was successful",
  CARD_CHARGE_FAILED: "Charging card failed",
  CARD_TRANSACTION_ERROR: "Error creating card transaction",
  CARD_TRANSACTION_SUCCESS: "Card transaction was successful",
  BANK_TRANSACTION_ERROR: "Error creating bank transaction",
  BANK_TRANSACTION_SUCCESS: "bank transaction was successful",
  VALIDATE_CARD_CHARGE_FAILED: "Validation card charge failed",
  VALIDATE_CARD_CHARGE_SUCCESS: "Validation card transaction was successful",
  WITHDRAWAL_INITIATED: "Withdrawal successful",
  WITHDRAWAL_INITIATION_SUCCESS: "Withdrawal successful",
  WITHDRAWAL_INITIATION_FAILED: "Withdrawal failed",
  TRANSFER_SUCCESS: (resource) => `Transfer to ${resource} successful`,
  TRANSFER_FAILED: (resource) => `Transfer to ${resource} failed`,
  TRANSFER_ERROR_MESSAGE: "Error making transfer",
  PARAM_ABSENT: (schema) => `Please provide a valid ${schema}`,
  USER_EXIST_VERIFICATION_FAIL_MSG:
    "Error trying to fetch user. It is not you, it is us.",
  RESOURCE_EXISTS: (resource) => `${resource} exists already.`,
  RESOURCE_NOT_EXISTS: (resource) => `${resource} does not exist`,
  RESOURCE_FETCH_SUCCESS: (resource) => `${resource} fetched successfully`,
  RESOURCE_FETCH_ERROR: (resource) => `could not fetch ${resource}`,
  RESOURCE_EXISTS_VERIFICATION_FAIL: (resource) =>
    `${resource}_EXIST_VERIFICATION_FAIL`,
  RESOURCE_EXISTS_VERIFICATION_FAIL_MSG: (resource) =>
    `${resource} verification failed. It is not you, it is us.`,
  RESOURCE_CREATE_ERROR_STATUS: (resource) => `${resource}_CREATE_ERROR`,
  RESOURCE_CREATE_SUCCESS: (resource) => `${resource} created successfully`,
  RESOURCE_CREATE_ERROR_MSG: (resource) =>
    `Error trying to create ${resource}. It is not you, it is us.`,
  RESOURCE_UPDATE_SUCCESS: (resource) => `${resource} updated successfully`,
  RESOURCE_UPDATE_ERROR_MSG: (resource) =>
    `Error trying to update ${resource}. It is not you, it is us.`,
  RESOURCE_UPDATE_ERROR_STATUS: (resource) => `${resource}_UPDATE_ERROR`,

  
};

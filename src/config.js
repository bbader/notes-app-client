export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "bobbbucket"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://06xwbqztn2.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_9RG8nyhPN",
    APP_CLIENT_ID: "6s0hl505udhcodrga7oasmm6lk",
    IDENTITY_POOL_ID: "us-east-1:8f242f67-8351-4a98-84bd-f093412417e8"
  }
};
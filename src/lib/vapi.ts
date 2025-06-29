import Vapi from "@vapi-ai/web";
export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!);

// import Vapi from '@vapi-ai/web';

// const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!);
// vapi.start(process.env.NEXT_PUBLIC_VAPI_API_KEY!); // Use workflowId instead of assistantId
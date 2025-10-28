'use server';
import { google } from "googleapis";

// abstracted auth
async function getGoogleSheets() {
  const glAuth = await google.auth.getClient({
    projectId: process.env.SHEETS_PROJECT_ID,
    credentials: {
      type: "service_account",
      project_id: process.env.SHEETS_PROJECT_ID,
      private_key_id: process.env.SHEETS_PRIVATE_KEY_ID,
      private_key: process.env.SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"), // fix multiline key
      client_email: process.env.SHEETS_CLIENT_EMAIL,
      universe_domain: "googleapis.com"
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth: glAuth });
}

// get data
export async function getSheetData() {
  const glSheets = await getGoogleSheets();

  const data = await glSheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEETS_ID,
    range: "Página1!A:G",
  });

  return { data: data.data.values };
}

// append data
export async function appendSheetData(prevState, values: FormData) {
  const glSheets = await getGoogleSheets();

  
    const formData ={
        name: values.get('nome')
    } 

  try {


    const response = await glSheets.spreadsheets.values.append({
    spreadsheetId: process.env.SHEETS_ID,
    range: "Página1!A:G", // range defines columns, not rows
    valueInputOption: "USER_ENTERED", // lets Google Sheets parse numbers/dates
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [[formData.name]], // must be a 2D array (array of rows)
    }
  });

    if(response.ok){
        return {
            success: 'Enviado!'
        }
    }
    
  } catch (error) {
    return {
        failed: error
    }
  }

}

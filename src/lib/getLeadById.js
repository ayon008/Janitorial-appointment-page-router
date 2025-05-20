export const revalidate = 1;
export default async function getLeads(leads, states, id) {
    let url = ``;
    if (leads && states && id) {
        url = `https://backend.janitorialappointment.com/getLeads?leadName=${leads}&states=${states}&id=${id}`;
    }
    else if (leads && states) {
        url = `https://backend.janitorialappointment.com/getLeads?leadName=${leads}&states=${states}`;
    }
    else if (leads) {
        url = `https://backend.janitorialappointment.com/getLeads?leadName=${leads}`;
    }
    else {
        url = `https://backend.janitorialappointment.com/getLeads`;
    }
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}
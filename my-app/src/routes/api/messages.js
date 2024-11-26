export async function post(request) {
    const { message } = Object.fromEntries(await request.formData());

    if (!message) {
        return {
            status: 400,
            body: { error: 'Bericht kan niet leeg zijn' }
        };
    }

    // Voeg het bericht toe aan een databron of een tijdelijke opslag zoals een bestand
    // Hier kun je bijvoorbeeld een eenvoudige mock-opslag gebruiken
    // Voor een echte applicatie zou dit een databaseaanroep zijn

    // Simuleer opslaan van het bericht (in een database of lokaal bestand)
    console.log('Nieuw bericht ontvangen:', message);

    return {
        status: 200,
        body: { message: 'Bericht succesvol ontvangen!' }
    };
}
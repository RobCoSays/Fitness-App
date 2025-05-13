<script lang="ts">
    import { GoogleFit } from "@perfood/capacitor-google-fit";

    type FitData = {
        calories: number;
        distanceKm: number;
    };

    let fitData: FitData | null = null;
    let loading = false;

    async function fetchGoogleFitData() {
        try {
            loading = true;

            await GoogleFit.connectToGoogleFit();

            const endTime = new Date();
            const startTime = new Date();
            startTime.setDate(endTime.getDate() - 1);

            const result = await GoogleFit.getHistory({
                startTime,
                endTime
            });

            const dayData = result.days?.[0] ?? {};

            fitData = {
                calories: parseFloat(dayData.calories ?? 0),
                distanceKm: parseFloat(dayData.distance ?? "0") / 1000,
            };

            console.info(
                "Fetched Historical Google Fit data:",
                JSON.stringify(result, null, 2),
            );


        } catch (err) {
            console.error("Failed to fetch Google Fit data:", err);
            alert("Could not connect to Google Fit.");
        } finally {
            loading = false;
        }
    }
</script>

<div class="center-screen">
    <button on:click={fetchGoogleFitData} disabled={loading}>
        {loading ? "Loading..." : "Show Google Fit Data"}
    </button>

    {#if fitData}
        <div class="card">
            <h3>Google Fit Data (Last 24h)</h3>
            <p><strong>Calories:</strong> {fitData.calories.toFixed(0)} kcal</p>
            <p><strong>Distance:</strong> {fitData.distanceKm.toFixed(2)} km</p>
        </div>
    {/if}
</div>

<style>
    .center-screen {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 1rem;
        gap: 1.5rem;
    }

    .card {
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        width: 90%;
        max-width: 400px;
        background: white;
    }

    button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        background: #4caf50;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

    button:disabled {
        background: #aaa;
        cursor: not-allowed;
    }
</style>

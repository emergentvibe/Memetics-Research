// Script to fetch Buy Me a Coffee supporter stats
// NOTE: API token should be stored in quartz.config.ts

const BMC_API_BASE = "https://developers.buymeacoffee.com/api/v1"

async function fetchBMCStats() {
  const statsElement = document.getElementById("bmc-supporters")
  if (!statsElement) return

  try {
    // Get API token from meta tag (you'll add this via config)
    const tokenMeta = document.querySelector('meta[name="bmc-token"]')
    const token = tokenMeta?.getAttribute("content")

    if (!token) {
      console.warn("Buy Me a Coffee API token not found")
      statsElement.textContent = "—"
      return
    }

    // Fetch supporters and members in parallel
    const [supportersRes, membersRes] = await Promise.all([
      fetch(`${BMC_API_BASE}/supporters`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      fetch(`${BMC_API_BASE}/subscriptions?status=active`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    ])

    if (!supportersRes.ok || !membersRes.ok) {
      throw new Error("Failed to fetch BMC data")
    }

    const supportersData = await supportersRes.json()
    const membersData = await membersRes.json()

    // Calculate total supporters
    // Per BMC docs: unique one-time supporters + members
    const onetimeSupporters = supportersData.data?.length || 0
    const activeMembers = membersData.data?.length || 0
    const totalSupporters = onetimeSupporters + activeMembers

    // Update the UI
    statsElement.textContent = totalSupporters.toString()
  } catch (error) {
    console.error("Error fetching BMC stats:", error)
    statsElement.textContent = "—"
  }
}

// Fetch stats when page loads
document.addEventListener("nav", () => {
  // Small delay to ensure elements are rendered
  setTimeout(fetchBMCStats, 100)
})

// Also fetch on initial load
window.addEventListener("load", fetchBMCStats)

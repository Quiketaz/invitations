My Invitations Project
This repository holds the web-based invitations for various personal events.

Each event has its own dedicated folder.

## How to View

The easiest way to see all available invitations is to open the main index file:

`./index.html`

This file acts as a central hub, linking to each individual event invitation.

## Event Folders

| Folder | Event |
|--------|-------|
| `/thanksgiving/` | Thanksgiving Potluck Dinner |
| `/enrique-birthday/` | Enrique's Birthday Celebration |
| `/welcome-sister-texas/` | Welcome Party for my Sister |
| `/amsy-graduation-dinner/` | Amsy's Graduation Dinner |

To view a specific invite, you can navigate into its folder and open the `index.html` file located inside.

---

## How to Add a New Invitation

1. **Create a new folder** under `invites/` with your event name (use kebab-case):
   ```bash
   mkdir invites/my-new-event
   ```

2. **Copy an existing invitation** — copy the `index.html` from any existing invite folder as a starting point

3. **Customize the content** — edit the HTML to match your event details:
   - Event name and date
   - Location and time
   - Message/invitation text
   - Theme colors

4. **Add the link to the main index** — open `index.html` in the root folder and add a new card following the existing pattern:
   ```html
   <a href="./invites/my-new-event/" class="block bg-white rounded-xl...">
       <div class="p-6 md:p-8">
           <h2 class="title-font text-2xl font-bold text-[color]-900">Event Name</h2>
           <p class="text-gray-700 mt-2">Brief description</p>
           <div class="mt-4 text-[color]-700 font-semibold">View Invite →</div>
       </div>
   </a>
   ```

5. **Test locally** — open `index.html` in your browser to verify the new invitation appears and links correctly

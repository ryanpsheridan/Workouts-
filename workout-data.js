// Warm-ups run about 25% shorter than they used to: five moves instead of six
// (the seated twist went - the lying crossover already covers the rotation) and a
// few reps and holds trimmed.
const WARMUPS = {
  "lower-a": [ // prior: Upper B (pull day) -> lats, upper back, biceps, forearms
    { ss: "1", ord: "1A", ex: "Toe Rockback to Deep Squat", link: "https://www.youtube.com/watch?v=GImwCsuBLyo", rp: "8 reps", note: "Kneel, toes tucked, hands down. Rock back onto heels into a deep squat, then forward - stretches ankles back, low back down." },
    { ss: "2", ord: "2A", ex: "90/90 Hip Switches", link: "https://www.youtube.com/watch?v=qq_Z7sAmVrA", rp: "8 / side", note: "Internal + external hip rotation. Chest tall, hips do the work. Sit up on a block or a plate if you can't stay upright hands-free - elevating the hips beats fighting for the position. Extra reps on the tighter side." },
    { ss: "3", ord: "3A", ex: "Single-Leg Glute Bridge (2 sec hold)", link: "https://www.youtube.com/watch?v=kZwLhgwfkwc", rp: "8 / side", note: "One foot down forces each side to work full before the session." },
    { ss: "4", ord: "4A", ex: "Squat Rock (Deep Squat to Hands-Behind Roll)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "15 reps", note: "Deep squat, feet flat, hands planted flat on the floor behind the hips - rock/roll the knees forward while keeping the hands down, bear-crawl style, then back to the squat. Great warm-up and activation for the belly pooch/core." },
    { ss: "5", ord: "5A", ex: "Lying Leg Crossover (or Supine Crossover Stretch)", link: "https://www.youtube.com/watch?v=1pefHMI9R6I", rp: "30 sec / side", note: "Lying on your back, arms out in a T, cross one bent knee over the body toward the floor while keeping both shoulders pinned down. Stretches the low back, glutes, and IT band after yesterday's pulling." }
  ],
  "upper-a": [ // today: PRESS/carries/arms. prior: Lower A -> glutes, quads, hip flexors
    { ss: "1", ord: "1A", ex: "Wall Angels", link: "https://www.youtube.com/watch?v=ywYi4rBhRBQ", rp: "10 reps", note: "Back to the wall, head resting against it without craning, low back flat. Arms in a goalpost, slide them overhead and back down, keeping wrists and elbows on the wall as long as they'll stay. Wherever you lose contact is the range the desk took - work there, don't force it. Puts the head back over the shoulders and gets the blades moving before you press.", posture: "Head back, shoulder blades back" },
    { ss: "2", ord: "2A", ex: "Band Pull-Aparts", link: "https://www.youtube.com/watch?v=LoBBo1dtY6I", rp: "12 reps", note: "Rear delts + mid-back on to balance the pressing ahead.", posture: "Shoulder blades back" },
    { ss: "3", ord: "3A", ex: "Wall Hip Flexor Stretch", link: "https://www.youtube.com/watch?v=O-Q4bAcyzBk", rp: "30 sec / side", note: "Opens hip flexors from yesterday's lunges." },
    { ss: "4", ord: "4A", ex: "Reverse Tabletop Hip Lifts", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "20 reps", note: "Reverse plank pulses - lift the hips up and down. Strengthens the core and relaxes the lower back before pressing." },
    { ss: "5", ord: "5A", ex: "Lying Leg Crossover (or Supine Crossover Stretch)", link: "https://www.youtube.com/watch?v=1pefHMI9R6I", rp: "30 sec / side", note: "Lying on your back, arms out in a T, cross one bent knee over the body toward the floor while keeping both shoulders pinned down. Stretches the low back, glutes, and IT band." }
  ],
  "lower-b": [ // prior: Upper A (press day) -> chest, front delts, triceps, traps
    { ss: "1", ord: "1A", ex: "Bretzles", link: "https://www.youtube.com/watch?v=rDviWORCWEw", rp: "8 / side", note: "Opens the chest/upper back tight from yesterday's presses." },
    { ss: "2", ord: "2A", ex: "Hip Internal Rotation Stretch", link: "https://www.youtube.com/watch?v=Njce_Yqccf0", rp: "30 sec / side", note: "Rotate the shin inward, sink into the back of the hip - the range golf hammers. Right side is the restricted one: run it 2:1, two holds right for every one left." },
    { ss: "3", ord: "3A", ex: "Cossack Squats", link: "https://www.youtube.com/watch?v=j-595dZdDkA", rp: "6 / side", note: "Slow and controlled - lateral hip and ankle mobility." },
    { ss: "4", ord: "4A", ex: "Wide-Legged Standing Forward Fold", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "45 sec", note: "Feet wide, hands clasped behind the back, fold forward - releases tight hamstrings before the step-ups and RDLs." },
    { ss: "5", ord: "5A", ex: "Lying Leg Crossover (or Supine Crossover Stretch)", link: "https://www.youtube.com/watch?v=1pefHMI9R6I", rp: "30 sec / side", note: "Lying on your back, arms out in a T, cross one bent knee over the body toward the floor while keeping both shoulders pinned down. Stretches the low back, glutes, and IT band." }
  ],
  "upper-b": [ // today: PULL/giant set/TRX. prior: Lower B -> glutes, quads, hamstrings, calves
    { ss: "1", ord: "1A", ex: "Bretzles", link: "https://www.youtube.com/watch?v=rDviWORCWEw", rp: "8 / side", note: "Opens the chest and upper back before the pull/giant set work." },
    { ss: "2", ord: "2A", ex: "Dead Hang", link: "https://www.youtube.com/watch?v=tbtXriMMRu4", rp: "30-45 sec", note: "Decompress the spine, pre-stretch the lats for the giant set. If the neck is sore, hang active - shoulders pulled down away from the ears." },
    { ss: "3", ord: "3A", ex: "Scapular Pull-Ups", link: "https://www.youtube.com/watch?v=-ZIpSoTRsuE", rp: "8 reps", note: "Hang and shrug the shoulder blades down - primes the back for pulling.", posture: "Head back, shoulder blades back" },
    { ss: "4", ord: "4A", ex: "Wall Hip Flexor Stretch", link: "https://www.youtube.com/watch?v=O-Q4bAcyzBk", rp: "30 sec / side", note: "Opens hip flexors after yesterday's sled and step-ups." },
    { ss: "5", ord: "5A", ex: "Lying Leg Crossover (or Supine Crossover Stretch)", link: "https://www.youtube.com/watch?v=1pefHMI9R6I", rp: "30 sec / side", note: "Lying on your back, arms out in a T, cross one bent knee over the body toward the floor while keeping both shoulders pinned down. Stretches the low back, glutes, and IT band." }
  ]
};

// Every day object, keyed once. PROGRAMS below decides which subset + order shows up.
// `type` drives the colour family and the rotation on the home screen.
const ALL_DAYS = [
  {
    id: "lower-a", label: "Lower A", focus: "Quads, rotation & the GHD core block",
    type: "lower", color: "#C8F25A",
    phases: [
      { name: "Strength", sub: "Keep moving: no rest inside a superset, about 60 sec between rounds - the pace is the conditioning. Golf tomorrow? First two groups only, same weight", rows: [
        { ss: "1", ord: "1A", ex: "Smith Machine Lunges OR Hack Squat", link: "https://www.youtube.com/watch?v=73CD40T-III", brace: true, rp: "6, 4, 2, 1", note: "Heavy quad strength. Keep the lead knee tracking over your toes, don't let it cave inward." },
        { ss: "",  ord: "1B", ex: "Lateral Band Walks", link: "https://www.youtube.com/watch?v=A12uKYg-Kuo", rp: "15 steps / side" },
        { ss: "2", ord: "2A", ex: "Twisting Lunges with 45 lb plate", brace: true, link: "https://www.instagram.com/reel/DZS4JCpSqFh/?igsh=MTFtZms4b2N6ZjRnNA==", rp: "4 x 8 / side", note: "Rotate the plate over the front leg - rotation under load. Keep the lead knee tracking over your toes." },
        { ss: "",  ord: "2B", ex: "Side Plank (top leg raised)", link: "https://www.youtube.com/watch?v=PAD7sMmIgts", rp: "30-40 sec / side", note: "Same anti-lean core the carry was here for, with nothing hanging off the shoulders. Stack the hips, don't let them sag back. Carries now live on Upper A only." },
        { ss: "",  ord: "2C", ex: "Half-Kneeling Cable Chop (High-to-Low)", brace: true, link: "https://www.youtube.com/watch?v=tKmTgQ_YajY", rp: "3 x 10 / side", note: "Golf downswing pattern - drive with hips and core, arms just connect. Single-Leg RDLs used to sit here; they run on Lower B only now, so the deepest hamstring stretch of the week happens once instead of twice. Reverse hypers in the core block still cover the posterior chain today." }
      ]},
      { name: "Core & finisher", sub: "EMOM x 3 rounds - one exercise per minute, rest is whatever's left of it", rows: [
        { ss: "1", ord: "1A", ex: "GHD Sit-Ups", link: "https://www.youtube.com/watch?v=pMS2dU0FuPk", rp: "12-15", note: "Same machine as the reverse hypers - flow straight between the two." },
        { ss: "",  ord: "1B", ex: "GHD Reverse Hyperextension", link: "https://www.youtube.com/watch?v=3vmbvoT2m-U", rp: "12-15", note: "Legs to parallel, squeeze the glutes at the top - not the low back. Slow, no momentum." },
        { ss: "",  ord: "1C", ex: "Sled Push (Forward + Backward) OR Heavy Kettlebell Swings", link: "https://www.youtube.com/watch?v=3KWK7SIdPz4", brace: true, rp: "40 yds", note: "The conditioning is the density here, not a separate machine. Forward drives the quads, backward is knee-friendly. Swap in KB swings if the sled's taken." }
      ]}
    ]
  },
  {
    id: "upper-a", label: "Upper A", focus: "Press, carries & arms in motion",
    type: "upper", color: "#7CC4FF",
    phases: [
      { name: "Strength", sub: "Keep moving: no rest inside a superset, about 60 sec between rounds - the pace is the conditioning.", rows: [
        { ss: "1", ord: "1A", ex: "Chin-Ups", link: "https://www.youtube.com/watch?v=53kV7Ou7oZo", rp: "3 x AMRAP", note: "Underhand grip, your most bicep-dominant pull - placed early while strong. Band-assist for honest reps.", posture: "Head back, shoulder blades back" },
        { ss: "",  ord: "1B", ex: "Wide Grip Barbell Curl (squat rack)", link: "https://www.youtube.com/results?search_query=wide+grip+barbell+curl", rp: "3 x 10", note: "Set the bar in the squat rack at hip height so you can lift it out clean. Hands wider than shoulders, elbows pinned, no swing. Wide grip biases the short head of the biceps.", posture: "Head back, shoulder blades back" },
        { ss: "",  ord: "1C", ex: "Hang Clean to Overhead Press", link: "https://www.youtube.com/results?search_query=hang+clean+to+overhead+press", brace: true, rp: "3 x 6", note: "Normal (overhand) grip. Bar from the squat rack, hinge to just below the knees, snap the hips and catch it at the shoulders, then press straight overhead. Lower to the shoulders and back down the same path. Pressing off the clean is the point, so keep the load honest." },
        { ss: "2", ord: "2A", ex: "Half-Kneeling Landmine Press", brace: true, link: "https://www.youtube.com/watch?v=LN1zCeoIfbE", rp: "3 x 8 / side", note: "Half-kneel forces core + anti-lean - golf-friendly overhead strength. Press with the arm on the same side as your down (kneeling) knee." },
        { ss: "",  ord: "2B", ex: "Hanging TRX Row", link: "https://www.youtube.com/watch?v=N_14s8zFOms", rp: "3 x 10", note: "Straps are right there - pull the chest to the handles.", posture: "Head back, shoulder blades back" },
        { ss: "3", ord: "3A", ex: "Standing Band Raises", link: "https://www.youtube.com/watch?v=iQlrRrZTrBs", rp: "3 x 12-15", note: "Stand on the band, arms out to the sides to shoulder height, slow on the way down. Side delts - the head that gets the least work when everything else is pressing forward. Light band, no swing, stop the moment the traps start doing it.", posture: "Shoulder blades back" },
        { ss: "",  ord: "3B", ex: "Farmer's Carry", link: "https://www.youtube.com/watch?v=lLAw6fUccKA", brace: true, rp: "45s / 3 x 30 yds", note: "Was 3 x 80 yds on three separate days - nine long trips a week, with no recovery for the traps in between. Now the only carry day. Set them down the moment posture changes, even at 20 yds. Once the neck is quiet, add a second day or more weight - never longer trips.", posture: "Head back, shoulder blades back" },
        { ss: "",  ord: "3C", ex: "Hanging Leg Raise", link: "https://www.youtube.com/watch?v=Pr1ieGZ5atk", rp: "3 x 10-12", note: "Straight or bent knees - control the descent, no swing. Core insurance before the finisher." },
        { ss: "4", ord: "4A", ex: "Overhead Rope Tricep Extension", link: "https://www.youtube.com/watch?v=SLYwsE_W1eM", brace: true, rp: "3 x 12", note: "Cable high pulley, rope behind the head, elbows tucked, full stretch overhead then lock out. Pairs with the curl: push then pull, no wasted rest." },
        { ss: "",  ord: "4B", ex: "Reverse Grip Pulley Curl", link: "https://www.youtube.com/results?search_query=reverse+grip+cable+curl", rp: "3 x 12", note: "Low pulley, overhand grip, elbows pinned. Hits the brachioradialis and forearms and balances the triceps work before it." }
      ]},
      { name: "Core & finisher", sub: "EMOM x 3 rounds - one exercise per minute, rest is whatever's left of it", rows: [
        { ss: "1", ord: "1A", ex: "Lying Plate Pass", link: "https://www.youtube.com/watch?v=y-y-EKnieNA", rp: "10", note: "Lower the plate behind your head, lift and pass it onto your shins, lower the legs, reverse. Low back glued to the floor." },
        { ss: "",  ord: "1B", ex: "Pallof Press (with hold)", link: "https://www.youtube.com/watch?v=HXrLaqNIkTs", rp: "8 / side", note: "Press out, hold 3 sec, resist the pull. Anti-rotation is the quality the swing leans on hardest." },
        { ss: "",  ord: "1C", ex: "Hammer Curls", link: "https://www.youtube.com/watch?v=FAKh_gifviY", rp: "12", note: "Keeps the minute moving and finishes the arms off - forearm and bicep with nothing left to set up." }
      ]}
    ]
  },
  {
    id: "lower-b", label: "Lower B", focus: "Single-leg strength & the heavy sled",
    type: "lower", color: "#C8F25A",
    phases: [
      { name: "Strength", sub: "Keep moving: no rest inside a superset, about 60 sec between rounds - the pace is the conditioning. Golf tomorrow? First two groups only, same weight", rows: [
        { ss: "1", ord: "1A", ex: "Offset Step-Ups", link: "https://www.youtube.com/watch?v=FvxWcvNyUuI", brace: true, rp: "4 x 6 / side", note: "Push through heel on the way up." },
        { ss: "",  ord: "1B", ex: "Walking Lunges", link: "https://www.youtube.com/watch?v=2MbSPOB24XQ", brace: true, rp: "25 yds", note: "Stay low and smooth off the step-ups. Keep the lead knee tracking over your toes." },
        { ss: "2", ord: "2A", ex: "Single-Leg Press (Machine)", link: "https://www.youtube.com/watch?v=ZYDTJaAM-gE", rp: "3 x 10-12 / side", note: "Press through the toes - quad focus." },
        { ss: "",  ord: "2B", ex: "Calf Raises OR Lateral Band Walks", link: "https://www.youtube.com/watch?v=A12uKYg-Kuo", rp: "15 reps / 15 steps" },
        { ss: "3", ord: "3A", ex: "Single-Leg DB RDL", brace: true, link: "https://www.youtube.com/watch?v=Zfr6wizR8rs", rp: "3 x 8 / side", note: "Hamstring, glute, and balance. DB in the hand opposite the working leg." },
        { ss: "",  ord: "3B", ex: "Pallof Press (with hold)", link: "https://www.youtube.com/watch?v=HXrLaqNIkTs", rp: "3 x 8 / side", note: "Press out, hold 3 sec, resist the pull - anti-rotation core for the swing." },
        { ss: "",  ord: "3C", ex: "TRX Y-Fly OR Prone Y Raise", link: "https://www.youtube.com/watch?v=YsJ3QUfzU48", rp: "3 x 12", note: "Arms overhead in a Y, thumbs up, drive from below the shoulder blades - no shrug, neck stays long. Reach long first, then lift. Should burn below the shoulder blades; if it lands at the top of the shoulders, ease off until it doesn't.", posture: "Shoulder blades back" }
      ]},
      { name: "Core & finisher", sub: "EMOM x 3 rounds - one exercise per minute, rest is whatever's left of it", rows: [
        { ss: "1", ord: "1A", ex: "Hanging Leg Raise OR Captain's Chair Knee Raise", link: "https://www.youtube.com/watch?v=Pr1ieGZ5atk", rp: "10-12", note: "Curl the knees to the chest, control the lower - no swing. Loaded lower-ab work that actually leaves you sore." },
        { ss: "",  ord: "1B", ex: "Side Plank (top leg raised)", link: "https://www.youtube.com/watch?v=PAD7sMmIgts", rp: "30 sec / side", note: "Anti-lean core, the other half of what the carries used to cover. Stack the hips, don't let them sag back." },
        { ss: "",  ord: "1C", ex: "Heavy Sled Push OR Weighted Step-Ups (fast tempo)", link: "https://www.youtube.com/watch?v=3KWK7SIdPz4", brace: true, rp: "20 yds", note: "One trip inside the minute - load it up and grind, forward only. Swap to step-ups if the sled's taken." }
      ]}
    ]
  },
  {
    id: "upper-b", label: "Upper B", focus: "Pull-biased, TRX & the pull-up giant set",
    type: "upper", color: "#7CC4FF",
    phases: [
      { name: "Strength", sub: "Keep moving: no rest inside a superset, about 60 sec between rounds - the pace is the conditioning.", rows: [
        { ss: "1", ord: "1A", ex: "Pull-Up Giant Set", link: "https://www.youtube.com/watch?v=UA5J55gATzo", rp: "1 set each variation", note: "Standard / Chin-Up / Wide / Neutral, back to back. Lean into the Chin-Ups - that's where the biceps drive. Loop a light band under a foot to push past the first few reps.", posture: "Head back, shoulder blades back" },
        { ss: "",  ord: "1B", ex: "Overhead Tricep Extension (rope)", link: "https://www.youtube.com/watch?v=SLYwsE_W1eM", brace: true, rp: "3 x 12", note: "Pull then push, no wasted rest. Elbows tucked, full stretch overhead." },
        { ss: "",  ord: "1C", ex: "Hanging Leg or Knee Raise", link: "https://www.youtube.com/watch?v=Pr1ieGZ5atk", rp: "3 x 10-12", note: "Same bar you're already hanging from - straight legs or bent knees, whichever you can control. Slow on the way down, no swing." },
        { ss: "2", ord: "2A", ex: "Hanging TRX Row", link: "https://www.youtube.com/watch?v=N_14s8zFOms", rp: "Heavy / 3 x 10", note: "Straps set short, squeeze the shoulder blades. Walk the feet forward to make it harder.", posture: "Head back, shoulder blades back" },
        { ss: "",  ord: "2B", ex: "Feet-Elevated Push-Ups (feet on box)", link: "https://www.youtube.com/watch?v=4aUUcfwyfE0", brace: true, rp: "3 x 10-12", note: "Box sits under the TRX - loads the upper chest and front delts." }
      ]},
      { name: "Core & finisher", sub: "EMOM x 3 rounds - one exercise per minute, rest is whatever's left of it", rows: [
        { ss: "1", ord: "1A", ex: "TRX Bicep Curl", link: "https://www.youtube.com/watch?v=Pa8Mls8saXc", rp: "12-15", note: "Lean back, elbows high, curl your body up. Straps are already set from the rows." },
        { ss: "",  ord: "1B", ex: "TRX Fallout OR GHD Sit-Ups", link: "https://www.youtube.com/watch?v=3X8UHOVMXuQ", rp: "8-10", note: "Straps in hand, arms out in front, lean forward and let the arms travel overhead - same anti-extension job as an ab wheel, on equipment this gym actually has. Squeeze the glutes and tuck the pelvis first; the moment the low back arches you've gone too far. Walk the feet back to make it harder." },
        { ss: "",  ord: "1C", ex: "Swimming Circles", link: "https://www.youtube.com/watch?v=6fPl70d17sY", rp: "10", note: "Face down, lift chest and legs, small circles with the arms - the extension side of the trunk, and a posture reset for the laptop hours.", posture: "Head back, shoulder blades back" }
      ]}
    ]
  },
  {
    id: "pre-golf", label: "Pre-Golf", focus: "Unloaded mobility only - no heavy work, no overhead load before you play",
    type: "golf", color: "#F2C46D",
    phases: [
      { name: "Back", sub: "Tight from yesterday's load", rows: [
        { ss: "1", ord: "1A", ex: "Toe Rockback to Deep Squat", link: "https://www.youtube.com/watch?v=GImwCsuBLyo", rp: "10 slow reps", note: "Kneel with toes tucked under, hands on the ground. Lift the knees and rock back onto your heels into a deep squat, then forward again - stretches the toes/ankles on the way back, the rounded lower back on the way down." },
        { ss: "2", ord: "2A", ex: "Thoracic Rotations (Quadruped)", link: "https://www.youtube.com/watch?v=QWwiOHexU8I", rp: "10 / side", note: "Free up the mid-back that took the load yesterday." },
        { ss: "3", ord: "3A", ex: "World's Greatest Stretch", link: "https://www.youtube.com/watch?v=-CiWQ2IvY34", rp: "6 / side", note: "Full hip opener with a thoracic reach at the top." },
        { ss: "5", ord: "5A", ex: "Foam Roll Mid Back", link: "https://www.youtube.com/watch?v=QMv-AyZmA3w", rp: "60 sec", note: "Slow rolls through the mid-back, pause on anything tight. Skip the low back." },
        { ss: "",  ord: "5B", ex: "Butterfly Stretch", link: "https://www.youtube.com/watch?v=bfvj51pOgF8", rp: "30-45 sec hold", note: "Feet together, knees out, ease the knees toward the floor - opens the hips while the back rests between rolls." },
        { ss: "6", ord: "6A", ex: "Foam Roll Upper Back & Lats", link: "https://www.youtube.com/watch?v=NOiM2TSjoMM", rp: "60 sec", note: "Work up through the upper back and lats." },
        { ss: "",  ord: "6B", ex: "Center Split Stretch", link: "https://www.youtube.com/watch?v=3qIiuM-ae3Y", rp: "30-45 sec hold", note: "Ease into a wide seated straddle, hinge slightly forward - opens the inner thighs and hips." }
      ]},
      { name: "Hamstrings", sub: "Tight from golf", rows: [
        { ss: "1", ord: "1A", ex: "Foam Roll Hamstrings", link: "https://www.youtube.com/watch?v=fwDNdgKnTsY", rp: "60 sec / leg", note: "Slow rolls to release what the round will keep asking from these." },
        { ss: "2", ord: "2A", ex: "Couch Stretch", link: "https://www.youtube.com/watch?v=-rsIS-wl-ig", rp: "30-45 sec / side", note: "Back knee down, shin up a bench behind you, drive the hips forward - opens the hip flexor and quad before you play." },
        { ss: "3", ord: "3A", ex: "Leg Swings (Front-to-Back)", link: "https://www.youtube.com/watch?v=0XvKtEZ4i38", rp: "10 / leg", note: "Dynamic range to get blood moving before the static holds settle in." },
        { ss: "4", ord: "4A", ex: "Banded Hamstring Pulls OR Light RDL (bar only)", link: "https://www.youtube.com/watch?v=MCpaZNAqDAw", rp: "2 x 10", note: "Slow and controlled - stop well short of anything pulling on the back." }
      ]},
      { name: "Finish", sub: "Loosen & open the hips for the round", rows: [
        { ss: "1", ord: "1A", ex: "90/90 Hip Switches", link: "https://www.youtube.com/watch?v=qq_Z7sAmVrA", rp: "8 / side", note: "Internal + external hip rotation - the range golf demands." },
        { ss: "2", ord: "2A", ex: "Walking Lunges with a Twist", link: "https://www.youtube.com/watch?v=HCFUgYtIXlE", rp: "10 / side", note: "Add a slow twist over the front leg to open the t-spine before you play. Keep the lead knee tracking over your toes, don't let it cave inward." },
        { ss: "3", ord: "3A", ex: "Easy Bike or Rower", rp: "5 min", note: "Just enough to get blood flowing - conversational pace, not a warm-up sweat." }
      ]}
    ]
  }
];

// Upper/Lower is the default rotation: Lower A -> Upper A -> Lower B -> Upper B.
// Pre-Golf sits apart - it isn't a training day, it's mobility before a round.
const PROGRAMS = {
  "split": { label: "Upper / Lower", days: ["lower-a", "upper-a", "lower-b", "upper-b"] },
  "golf": { label: "Golf", days: ["pre-golf"] }
};
const DEFAULT_PROGRAM = "split";

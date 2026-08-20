const WARMUPS = {
  "full-body-a": [ // squat + horizontal press/pull day
    { ss: "1", ord: "1A", ex: "Toe Rockback to Deep Squat", rp: "8 reps", note: "Kneel, toes tucked, hands down. Rock back onto heels into a deep squat, then forward - stretches ankles back, low back down." },
    { ss: "2", ord: "2A", ex: "90/90 Hip Switches", link: "https://www.youtube.com/watch?v=qq_Z7sAmVrA", rp: "8 / side", note: "Internal + external hip rotation. Chest tall, hips do the work. Sit up on a block or a plate if you can't stay upright hands-free - elevating the hips beats fighting for the position. Extra reps on the tighter side." },
    { ss: "3", ord: "3A", ex: "Wall Angels", rp: "10 reps", note: "Back to the wall, low back flat. Slide arms overhead and back down, keeping wrists and elbows on the wall as long as they'll stay. Puts the head back over the shoulders and gets the blades moving before you press and pull.", posture: "Head back, shoulder blades back" },
    { ss: "4", ord: "4A", ex: "Band Pull-Aparts", rp: "12 reps", note: "Rear delts + mid-back on before anything pushes or pulls.", posture: "Shoulder blades back" },
    { ss: "5", ord: "5A", ex: "Seated Spinal Twist (Arms Raised Overhead)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "20 reps", note: "One leg bent in front, rotate the torso, hands clasped up high. Fixes pelvic tilt and relieves back pain." },
    { ss: "6", ord: "6A", ex: "Child's Pose (Hands Clasped Behind Head)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "hold daily", note: "Kneeling forward fold, elbows pointing down, opening the upper back. Opens the thoracic spine and corrects rounded shoulders." }
  ],
  "full-body-b": [ // hinge + incline press/carry day
    { ss: "1", ord: "1A", ex: "Single-Leg Glute Bridge (2 sec hold)", rp: "10 / side", note: "One foot down forces each side to work full before the session's hinging." },
    { ss: "2", ord: "2A", ex: "Wide-Legged Standing Forward Fold", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "60 sec/day", note: "Feet wide, hands clasped behind the back, fold forward - releases tight hamstrings before the step-ups and RDLs." },
    { ss: "3", ord: "3A", ex: "Open Books", link: "https://www.youtube.com/watch?v=rDviWORCWEw", rp: "8 / side", note: "Opens the chest and upper back before pressing." },
    { ss: "4", ord: "4A", ex: "Reverse Tabletop Hip Lifts", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "30 reps", note: "Reverse plank pulses - lift the hips up and down. Strengthens the core and relaxes the lower back before pressing." },
    { ss: "5", ord: "5A", ex: "Seated Spinal Twist (Arms Raised Overhead)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "20 reps", note: "One leg bent in front, rotate the torso, hands clasped up high. Fixes pelvic tilt and relieves back pain." },
    { ss: "6", ord: "6A", ex: "Child's Pose (Hands Clasped Behind Head)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "hold daily", note: "Kneeling forward fold, elbows pointing down, opening the upper back. Opens the thoracic spine and corrects rounded shoulders." }
  ],
  "full-body-c": [ // unilateral legs + pull-up giant set day
    { ss: "1", ord: "1A", ex: "Squat Rock (Deep Squat to Hands-Behind Roll)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "20 reps/day", note: "Deep squat, feet flat, hands planted flat on the floor behind the hips - rock/roll the knees forward while keeping the hands down, bear-crawl style, then back to the squat. Great warm-up and activation for the belly pooch/core." },
    { ss: "2", ord: "2A", ex: "Upper Trap + Levator Stretch", rp: "30 sec / side", note: "Sit on one hand so the shoulder can't ride up. Ear toward the opposite shoulder for the upper trap; then turn the nose down toward the armpit for the levator. Light pull with the free hand, no cranking - these are the ones that bark during hangs and carries." },
    { ss: "3", ord: "3A", ex: "Dead Hang", rp: "30-60 sec", note: "Decompress the spine, pre-stretch the lats for the giant set. If the neck is sore, hang active - shoulders pulled down away from the ears." },
    { ss: "4", ord: "4A", ex: "Wall Hip Flexor Stretch", rp: "30 sec / side", note: "Opens hip flexors before the single-leg work." },
    { ss: "5", ord: "5A", ex: "Seated Spinal Twist (Arms Raised Overhead)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "20 reps", note: "One leg bent in front, rotate the torso, hands clasped up high. Fixes pelvic tilt and relieves back pain." },
    { ss: "6", ord: "6A", ex: "Child's Pose (Hands Clasped Behind Head)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "hold daily", note: "Kneeling forward fold, elbows pointing down, opening the upper back. Opens the thoracic spine and corrects rounded shoulders." }
  ]
};

const DAYS = [
  {
    id: "full-body-a", label: "Full Body A", focus: "Squat power, horizontal press & pull, rotation",
    color: "#2563eb", soft: "#eef4ff",
    phases: [
      { name: "Power & prime", sub: "Golf tomorrow? Skip this block - the landings cost the most", rows: [
        { ss: "1", ord: "1A", ex: "Box Jumps", link: "https://www.youtube.com/watch?v=YLPQsdRDmB0", rp: "3 x 4", note: "Done first, while fresh. Step down every rep, land soft and quiet - control over height." },
        { ss: "",  ord: "1B", ex: "Med Ball Rotational Slam OR Cable Rotational Chop", link: "https://www.youtube.com/watch?v=W_4eq6r00zw", rp: "3 x 5 / side", note: "Load the trail hip, fire through with full rotation. Explosive - spikes the heart rate early." }
      ]},
      { name: "Strength", sub: "Golf tomorrow? First two groups only, same weight - cut sets, never load", rows: [
        { ss: "1", ord: "1A", ex: "Smith Machine Lunges OR Hack Squat", brace: true, rp: "6, 4, 2, 1", note: "Heavy quad strength. Keep the lead knee tracking over your toes, don't let it cave inward." },
        { ss: "",  ord: "1B", ex: "Lateral Band Walks", rp: "15 steps / side" },
        { ss: "2", ord: "2A", ex: "Chin-Ups", rp: "3 x AMRAP", note: "Underhand grip, your most bicep-dominant pull - placed early while strong. Band-assist for honest reps.", posture: "Head back, shoulder blades back" },
        { ss: "",  ord: "2B", ex: "Hanging TRX Row", rp: "3 x 10", note: "Straps are right there - pull the chest to the handles.", posture: "Head back, shoulder blades back" },
        { ss: "3", ord: "3A", ex: "Half-Kneeling Landmine Press", brace: true, link: "https://www.youtube.com/watch?v=LN1zCeoIfbE", rp: "3 x 8 / side", note: "Half-kneel forces core + anti-lean - golf-friendly overhead strength. Press with the arm on the same side as your down (kneeling) knee." },
        { ss: "",  ord: "3B", ex: "Standing Band Raises", rp: "3 x 12-15", note: "Side delts - the head that gets the least work when everything else is pressing forward. Light band, no swing, stop the moment the traps start doing it.", posture: "Shoulder blades back" }
      ]},
      { name: "Core & finisher", sub: "EMOM x 3 rounds - one exercise per minute, rest is whatever's left of it", rows: [
        { ss: "1", ord: "1A", ex: "GHD Sit-Ups", rp: "12-15", note: "Same machine as the reverse hypers - flow straight between the two." },
        { ss: "",  ord: "1B", ex: "GHD Reverse Hyperextension", rp: "12-15", note: "Legs to parallel, squeeze the glutes at the top - not the low back. Slow, no momentum." },
        { ss: "",  ord: "1C", ex: "Pallof Press (with hold)", link: "https://www.youtube.com/watch?v=HXrLaqNIkTs", rp: "8 / side", note: "Press out, hold 3 sec, resist the pull. Anti-rotation is the quality the swing leans on hardest." }
      ]}
    ]
  },
  {
    id: "full-body-b", label: "Full Body B", focus: "Hinge strength, incline press & carries",
    color: "#7c3aed", soft: "#f1ecfe",
    phases: [
      { name: "Power & prime", sub: "Golf tomorrow? Skip this block - the landings cost the most", rows: [
        { ss: "1", ord: "1A", ex: "Broad Jumps", link: "https://www.youtube.com/watch?v=GR5JVcHHS_Q", rp: "3 x 4", note: "Fresh legs first. Stick and hold each landing - control beats distance." },
        { ss: "",  ord: "1B", ex: "Skater Bounds", link: "https://www.youtube.com/watch?v=G5tsTOqrkec", rp: "3 x 5 / side", note: "Lateral bound, stick the landing on one leg - balance and athleticism." }
      ]},
      { name: "Strength", sub: "Golf tomorrow? First two groups only, same weight - cut sets, never load", rows: [
        { ss: "1", ord: "1A", ex: "Offset Step-Ups", brace: true, rp: "4 x 6 / side", note: "Push through heel on the way up." },
        { ss: "",  ord: "1B", ex: "Walking Lunges", brace: true, rp: "25 yds", note: "Stay low and smooth off the step-ups. Keep the lead knee tracking over your toes." },
        { ss: "2", ord: "2A", ex: "Single-Leg DB RDL", brace: true, link: "https://www.youtube.com/watch?v=Zfr6wizR8rs", rp: "3 x 8 / side", note: "Hamstring, glute, and balance. DB in the hand opposite the working leg." },
        { ss: "",  ord: "2B", ex: "TRX Y-Fly OR Prone Y Raise", link: "https://www.youtube.com/watch?v=YsJ3QUfzU48", rp: "3 x 12", note: "Arms overhead in a Y, thumbs up, drive from below the shoulder blades - no shrug, neck stays long. Should burn below the shoulder blades; if it lands at the top of the shoulders, ease off until it doesn't.", posture: "Shoulder blades back" },
        { ss: "3", ord: "3A", ex: "Alternating Incline Curl-to-Press", brace: true, rp: "3 x 8 / side", note: "One arm at a time: curl from a full stretch, keep it moving into a straight overhead press. Lower the same path, then switch. Press quality is the point, so keep the load honest." },
        { ss: "",  ord: "3B", ex: "Farmer's Carry", brace: true, rp: "45s / 3 x 30 yds", note: "Set them down the moment posture changes, even at 20 yds. Once the neck is quiet, add a second day or more weight - never longer trips.", posture: "Head back, shoulder blades back" }
      ]},
      { name: "Core & finisher", sub: "EMOM x 3 rounds - one exercise per minute, rest is whatever's left of it", rows: [
        { ss: "1", ord: "1A", ex: "Hanging Leg Raise OR Captain's Chair Knee Raise", rp: "10-12", note: "Curl the knees to the chest, control the lower - no swing. Loaded lower-ab work that actually leaves you sore." },
        { ss: "",  ord: "1B", ex: "Side Plank (top leg raised)", link: "https://www.youtube.com/watch?v=PAD7sMmIgts", rp: "30-40 sec / side", note: "Anti-lean core, the other half of what the carries cover. Stack the hips, don't let them sag back." }
      ]}
    ]
  },
  {
    id: "full-body-c", label: "Full Body C", focus: "Unilateral legs, pull-up giant set & conditioning",
    color: "#059669", soft: "#dff5ec",
    phases: [
      { name: "Power & prime", rows: [
        { ss: "1", ord: "1A", ex: "Med Ball Slams", link: "https://www.youtube.com/watch?v=EsAhU1jHpiQ", rp: "3 x 6", note: "Explosive overhead slam, full effort down, reset each rep - heart rate up before you touch a weight." },
        { ss: "",  ord: "1B", ex: "Explosive / Plyo Push-Ups", rp: "2 x 5", note: "Push hard enough to leave the floor - land soft into the next rep." }
      ]},
      { name: "Strength", rows: [
        { ss: "1", ord: "1A", ex: "Single-Leg Press (Machine)", rp: "3 x 10-12 / side", note: "Press through the toes - quad focus." },
        { ss: "",  ord: "1B", ex: "Calf Raises OR Lateral Band Walks", rp: "15 reps / 15 steps" },
        { ss: "2", ord: "2A", ex: "Pull-Up Giant Set", rp: "1 set each variation", note: "Standard / Chin-Up / Wide / Neutral, back to back. Lean into the Chin-Ups - that's where the biceps drive. Loop a light band under a foot to push past the first few reps.", posture: "Head back, shoulder blades back" },
        { ss: "",  ord: "2B", ex: "Overhead Tricep Extension (rope)", brace: true, rp: "3 x 12", note: "Pull then push, no wasted rest. Elbows tucked, full stretch overhead." },
        { ss: "3", ord: "3A", ex: "Feet-Elevated Push-Ups (feet on box)", brace: true, rp: "3 x 10-12", note: "Loads the upper chest and front delts." },
        { ss: "",  ord: "3B", ex: "Half-Kneeling Cable Chop (High-to-Low)", brace: true, link: "https://www.youtube.com/watch?v=tKmTgQ_YajY", rp: "3 x 10 / side", note: "Golf downswing pattern - drive with hips and core, arms just connect." }
      ]},
      { name: "Core & finisher", sub: "EMOM x 3 rounds - one exercise per minute, rest is whatever's left of it", rows: [
        { ss: "1", ord: "1A", ex: "TRX Fallout OR GHD Sit-Ups", link: "https://www.youtube.com/watch?v=3X8UHOVMXuQ", rp: "8-10", note: "Straps in hand, arms out in front, lean forward and let the arms travel overhead - same anti-extension job as an ab wheel. Squeeze the glutes and tuck the pelvis first; the moment the low back arches you've gone too far." },
        { ss: "",  ord: "1B", ex: "Heavy Sled Push OR Weighted Step-Ups (fast tempo)", brace: true, rp: "20 yds", note: "One trip inside the minute - load it up and grind, forward only. Swap to step-ups if the sled's taken." }
      ]}
    ]
  },
  {
    id: "pre-golf", label: "Pre-Golf", focus: "Unloaded mobility only - no heavy work, no overhead load before you play",
    color: "#ca8a04", soft: "#fdf3d9",
    phases: [
      { name: "Back", sub: "Tight from yesterday's load", rows: [
        { ss: "1", ord: "1A", ex: "Toe Rockback to Deep Squat", rp: "10 slow reps", note: "Kneel with toes tucked under, hands on the ground. Lift the knees and rock back onto your heels into a deep squat, then forward again - stretches the toes/ankles on the way back, the rounded lower back on the way down." },
        { ss: "2", ord: "2A", ex: "Thoracic Rotations (Quadruped)", rp: "10 / side", note: "Free up the mid-back that took the load yesterday." },
        { ss: "3", ord: "3A", ex: "World's Greatest Stretch", rp: "6 / side", note: "Full hip opener with a thoracic reach at the top." },
        { ss: "5", ord: "5A", ex: "Foam Roll Mid Back", rp: "60 sec", note: "Slow rolls through the mid-back, pause on anything tight. Skip the low back." },
        { ss: "",  ord: "5B", ex: "Butterfly Stretch", rp: "30-45 sec hold", note: "Feet together, knees out, ease the knees toward the floor - opens the hips while the back rests between rolls." },
        { ss: "6", ord: "6A", ex: "Foam Roll Upper Back & Lats", rp: "60 sec", note: "Work up through the upper back and lats." },
        { ss: "",  ord: "6B", ex: "Center Split Stretch", rp: "30-45 sec hold", note: "Ease into a wide seated straddle, hinge slightly forward - opens the inner thighs and hips." }
      ]},
      { name: "Hamstrings", sub: "Tight from golf", rows: [
        { ss: "1", ord: "1A", ex: "Foam Roll Hamstrings", rp: "60 sec / leg", note: "Slow rolls to release what the round will keep asking from these." },
        { ss: "2", ord: "2A", ex: "Couch Stretch", rp: "30-45 sec / side", note: "Back knee down, shin up a bench behind you, drive the hips forward - opens the hip flexor and quad before you play." },
        { ss: "3", ord: "3A", ex: "Leg Swings (Front-to-Back)", rp: "10 / leg", note: "Dynamic range to get blood moving before the static holds settle in." },
        { ss: "4", ord: "4A", ex: "Banded Hamstring Pulls OR Light RDL (bar only)", rp: "2 x 10", note: "Slow and controlled - stop well short of anything pulling on the back." }
      ]},
      { name: "Finish", sub: "Loosen & open the hips for the round", rows: [
        { ss: "1", ord: "1A", ex: "90/90 Hip Switches", link: "https://www.youtube.com/watch?v=qq_Z7sAmVrA", rp: "8 / side", note: "Internal + external hip rotation - the range golf demands." },
        { ss: "2", ord: "2A", ex: "Walking Lunges with a Twist", rp: "10 / side", note: "Add a slow twist over the front leg to open the t-spine before you play. Keep the lead knee tracking over your toes, don't let it cave inward." },
        { ss: "3", ord: "3A", ex: "Easy Bike or Rower", rp: "5 min", note: "Just enough to get blood flowing - conversational pace, not a warm-up sweat." }
      ]}
    ]
  }
];

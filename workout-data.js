// Warm-ups are 50/50: the first half loosens whatever was trained the day before, the
// second half primes the day ahead. Six moves each.
const WARMUPS = {
  "lower-a": [ // first 3 loosen yesterday's pull day, last 3 prep the legs
    { ss: "1", ord: "1A", ex: "Cat-Cow", link: "https://www.youtube.com/results?search_query=Cat-Cow", rp: "10 reps", note: "Slow, full range. Gets the spine moving again after yesterday's pulling." },
    { ss: "2", ord: "2A", ex: "Child's Pose Lat Reach", link: "https://www.youtube.com/results?search_query=Child's+Pose+Lat+Reach", rp: "30 sec / side", note: "Knees wide, walk both hands to one side and sink the hips back. Opens the lats yesterday's pull-ups tightened." },
    { ss: "3", ord: "3A", ex: "Wrist & Forearm Flexor Stretch", link: "https://www.youtube.com/results?search_query=Wrist+%26+Forearm+Flexor+Stretch", rp: "30 sec / side", note: "Arm out, palm up, gently pull the fingers back. Releases the forearms and biceps tendon after the curls and hangs." },
    { ss: "4", ord: "4A", ex: "Knee-to-Wall Ankle Rocks", link: "https://www.youtube.com/results?search_query=Knee-to-Wall+Ankle+Rocks", rp: "10 / side", note: "Foot flat, drive the knee over the toes to the wall without the heel lifting. The one lower-body prep before squatting." },
    { ss: "5", ord: "5A", ex: "Glute Bridge March", link: "https://www.youtube.com/results?search_query=Glute+Bridge+March", rp: "10 / side", note: "Hips high and level, march the knees without letting the pelvis drop. Wakes the glutes up." },
    { ss: "6", ord: "6A", ex: "Lateral Lunge Reach", link: "https://www.youtube.com/results?search_query=Lateral+Lunge+Reach", rp: "6 / side", note: "Sit back into one hip, other leg straight, reach across. Hips and adductors, no load." }
  ],
  "upper-a": [ // first 3 loosen yesterday's lower day, last 3 prep the pulling
    { ss: "1", ord: "1A", ex: "Wall Hip Flexor Stretch", link: "https://www.youtube.com/results?search_query=Wall+Hip+Flexor+Stretch", rp: "30 sec / side", note: "Back knee down against the wall, squeeze the glute and drive the hips forward. Opens the hip flexors and quads from the lunges and step-ups." },
    { ss: "2", ord: "2A", ex: "Supine Figure-4 Stretch", link: "https://www.youtube.com/results?search_query=Supine+Figure-4+Stretch", rp: "30 sec / side", note: "On your back, ankle over the opposite knee, pull the thigh in. Glutes and outer hip." },
    { ss: "3", ord: "3A", ex: "Foam Roll Quads", link: "https://www.youtube.com/results?search_query=Foam+Roll+Quads", rp: "60 sec / leg", note: "Face down, slow rolls from hip to just above the knee, pause on anything tender." },
    { ss: "4", ord: "4A", ex: "Thread the Needle", link: "https://www.youtube.com/results?search_query=Thread+the+Needle", rp: "8 / side", note: "From all fours, slide one arm under the body and rotate, then reach to the ceiling. Mid-back rotation." },
    { ss: "5", ord: "5A", ex: "Scap Push-Ups", link: "https://www.youtube.com/results?search_query=Scap+Push-Ups", rp: "12 reps", note: "Arms locked, only the shoulder blades move. The one upper-body prep before pulling.", posture: "Shoulder blades back" },
    { ss: "6", ord: "6A", ex: "Prone Y-T-W Raises", link: "https://www.youtube.com/results?search_query=Prone+Y-T-W+Raises", rp: "6 each", note: "Face down, light or no weight, thumbs up. Y, then T, then W - lift from below the shoulder blades.", posture: "Head back, shoulder blades back" }
  ],
  "lower-b": [ // first 3 loosen yesterday's upper day, last 3 prep the legs
    { ss: "1", ord: "1A", ex: "Open Books", link: "https://www.youtube.com/results?search_query=Open+Books", rp: "8 / side", note: "On your side, knees stacked, open the top arm and chest to the ceiling and follow it with your eyes." },
    { ss: "2", ord: "2A", ex: "Doorway Pec Stretch", link: "https://www.youtube.com/results?search_query=Doorway+Pec+Stretch", rp: "30 sec / side", note: "Forearm on the frame, step through. Opens the chest after the pressing." },
    { ss: "3", ord: "3A", ex: "Overhead Triceps Stretch", link: "https://www.youtube.com/results?search_query=Overhead+Triceps+Stretch", rp: "30 sec / side", note: "Elbow up, hand down the back, other hand gently pulls the elbow. Triceps and lats." },
    { ss: "4", ord: "4A", ex: "Hip CARs", link: "https://www.youtube.com/results?search_query=Hip+CARs", rp: "5 / side", note: "Slow, big circles with the knee, rest of the body still. Find the edge of the hip range and sit there." },
    { ss: "5", ord: "5A", ex: "Fire Hydrants", link: "https://www.youtube.com/results?search_query=Fire+Hydrants", rp: "10 / side", note: "On all fours, lift the knee out to the side, hips square. Glute med before the single-leg work." },
    { ss: "6", ord: "6A", ex: "Walking Lunges (bodyweight)", link: "https://www.youtube.com/watch?v=2MbSPOB24XQ", rp: "10 / side", note: "No weight, just groove the pattern and warm the hips before the loaded lunges." }
  ],
  "upper-b": [ // first 3 loosen yesterday's lower day, last 3 prep the pulling
    { ss: "1", ord: "1A", ex: "90/90 Hip Switches", link: "https://www.youtube.com/watch?v=qq_Z7sAmVrA", rp: "8 / side", note: "Internal and external hip rotation. Chest tall, sit up on a block or a plate if you can't stay upright." },
    { ss: "2", ord: "2A", ex: "Wide-Legged Standing Forward Fold", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "45 sec", note: "Feet wide, hands clasped behind the back, fold forward. Releases hamstrings and calves from yesterday." },
    { ss: "3", ord: "3A", ex: "Foam Roll Glutes & Quads", link: "https://www.youtube.com/results?search_query=Foam+Roll+Glutes+%26+Quads", rp: "60 sec", note: "Slow rolls through the glutes, then the quads. Pause on anything tight." },
    { ss: "4", ord: "4A", ex: "Band Face Pulls", link: "https://www.youtube.com/results?search_query=Band+Face+Pulls", rp: "12 reps", note: "Pull to the face with the elbows high, rear delts and mid-back. The one upper-body prep before the pulling.", posture: "Head back, shoulder blades back" },
    { ss: "5", ord: "5A", ex: "Dead Bug", link: "https://www.youtube.com/results?search_query=Dead+Bug", rp: "8 / side", note: "Low back pressed into the floor, opposite arm and leg lower slowly. Core on before the hanging work." },
    { ss: "6", ord: "6A", ex: "Bear Crawl Shoulder Taps", link: "https://www.youtube.com/results?search_query=Bear+Crawl+Shoulder+Taps", rp: "20 taps", note: "Hands under shoulders, knees an inch off the floor, hips don't rock. Shoulders and trunk together." }
  ]
};

// Every day object, keyed once. PROGRAMS below decides which subset + order shows up.
// `type` drives the colour family and the rotation on the home screen.
const ALL_DAYS = [
  {
    id: "lower-a", label: "Lower A", focus: "Squat, step-up & the GHD block",
    type: "lower", color: "#C8F25A",
    phases: [
      { name: "Workout", sub: "No rest inside a superset, about 60 sec between rounds. The pace is the conditioning. Golf tomorrow? First two groups only, same weight.", rows: [
        { ss: "1",ord: "1A",ex: "Smith Machine Lunges OR Hack Squat",link: "https://www.youtube.com/watch?v=73CD40T-III",brace: true,rp: "6, 4, 2, 1",note: "Heavy quad strength. Keep the lead knee tracking over your toes, don't let it cave inward." },
        { ss: "",ord: "1B",ex: "GHD Reverse Hyperextension",link: "https://www.youtube.com/watch?v=3vmbvoT2m-U",rp: "3 x 12-15",note: "Legs to parallel, squeeze the glutes at the top - not the low back. Slow, no momentum." },
        { ss: "",ord: "1C",ex: "Side Plank (top leg raised)",link: "https://www.youtube.com/watch?v=PAD7sMmIgts",rp: "30-40 sec / side",note: "Anti-lean core. Stack the hips, don't let them sag back." },
        { ss: "2",ord: "2A",ex: "Offset Step-Ups",link: "https://www.youtube.com/watch?v=FvxWcvNyUuI",brace: true,rp: "4 x 6 / side",note: "Push through heel on the way up." },
        { ss: "",ord: "2B",ex: "Half-Kneeling Cable Chop (High-to-Low)",link: "https://www.youtube.com/watch?v=tKmTgQ_YajY",brace: true,rp: "3 x 10 / side",note: "Golf downswing pattern - drive with hips and core, arms just connect." },
        { ss: "",ord: "2C",ex: "Lateral Band Walks",link: "https://www.youtube.com/watch?v=A12uKYg-Kuo",rp: "15 steps / side" },
        { ss: "3",ord: "3A",ex: "Goblet Reverse Lunge to Knee Drive",link: "https://www.youtube.com/results?search_query=Goblet+Reverse+Lunge+to+Knee+Drive",brace: true,rp: "3 x 8 / side",note: "Goblet hold, step back, then drive the rear knee up to hip height and balance a beat. Single-leg strength with a balance finish." },
        { ss: "",ord: "3B",ex: "Sled Push (Forward + Backward) OR Heavy Kettlebell Swings",link: "https://www.youtube.com/watch?v=3KWK7SIdPz4",brace: true,rp: "40 yds",note: "Forward drives the quads, backward is knee-friendly. Swap in KB swings if the sled's taken." },
        { ss: "",ord: "3C",ex: "Dead Bug",link: "https://www.youtube.com/results?search_query=dead+bug+exercise",rp: "3 x 8 / side",note: "Low back glued to the floor, opposite arm and leg lower slowly. Anti-extension core." }
      ]}
    ]
  },
  {
    id: "upper-a", label: "Upper A", focus: "Pull, press & arms",
    type: "upper", color: "#7CC4FF",
    phases: [
      { name: "Workout", sub: "No rest inside a superset, about 60 sec between rounds. The pace is the conditioning.", rows: [
        { ss: "1",ord: "1A",ex: "Hanging TRX Row",link: "https://www.youtube.com/watch?v=N_14s8zFOms",rp: "Heavy / 3 x 10",note: "Straps set short, squeeze the shoulder blades. Walk the feet forward to make it harder.",posture: "Head back, shoulder blades back" },
        { ss: "",ord: "1B",ex: "Incline Dumbbell Press",link: "https://www.youtube.com/results?search_query=incline+dumbbell+press",rp: "3 x 8-10",note: "Low incline, pressing up and slightly back at an angle - no overhead lockout, so the low back stays quiet.",posture: "Shoulder blades back" },
        { ss: "",ord: "1C",ex: "Pallof Press (with hold)",link: "https://www.youtube.com/watch?v=HXrLaqNIkTs",rp: "3 x 8 / side",note: "Press out, hold 3 sec, resist the pull - anti-rotation core for the swing." },
        { ss: "2",ord: "2A",ex: "Chin-Ups",link: "https://www.youtube.com/watch?v=53kV7Ou7oZo",rp: "3 x AMRAP",note: "Underhand grip, your most bicep-dominant pull - placed early while strong. Band-assist for honest reps.",posture: "Head back, shoulder blades back" },
        { ss: "",ord: "2B",ex: "Hammer Curls",link: "https://www.youtube.com/watch?v=FAKh_gifviY",rp: "3 x 12",note: "Forearm and bicep, nothing left to set up." },
        { ss: "",ord: "2C",ex: "Hanging Leg Raise",link: "https://www.youtube.com/watch?v=Pr1ieGZ5atk",rp: "3 x 10-12",note: "Straight or bent knees - control the descent, no swing." },
        { ss: "3",ord: "3A",ex: "Cable Face Pull (rope)",link: "https://www.youtube.com/results?search_query=Cable+Face+Pull+(rope)",rp: "3 x 15",note: "Rope at head height, pull to the face and split the ends, elbows high. Rear delts and mid-back.",posture: "Head back, shoulder blades back" },
        { ss: "",ord: "3B",ex: "Rope Tricep Pushdown",link: "https://www.youtube.com/results?search_query=rope+tricep+pushdown",brace: true,rp: "3 x 12",note: "Pull then push, no wasted rest. Elbows tucked, split the rope at the bottom." },
        { ss: "",ord: "3C",ex: "Lying Plate Pass",link: "https://www.youtube.com/watch?v=y-y-EKnieNA",rp: "3 x 10",note: "Lower the plate behind your head, lift and pass it onto your shins, lower the legs, reverse. Low back glued to the floor." },
        { ss: "4",ord: "4A",ex: "Wide Grip Barbell Curl (squat rack)",link: "https://www.youtube.com/results?search_query=wide+grip+barbell+curl",rp: "3 x 10",note: "Set the bar in the squat rack at hip height so you can lift it out clean. Hands wider than shoulders, elbows pinned, no swing.",posture: "Head back, shoulder blades back" },
        { ss: "",ord: "4B",ex: "Reverse Grip Pulley Curl",link: "https://www.youtube.com/results?search_query=reverse+grip+cable+curl",rp: "3 x 12",note: "Low pulley, overhand grip, elbows pinned. Hits the brachioradialis and forearms." },
        { ss: "",ord: "4C",ex: "Standing Band Raises",link: "https://www.youtube.com/watch?v=iQlrRrZTrBs",rp: "3 x 12-15",note: "Stand on the band, arms out to the sides to shoulder height, slow on the way down. Light band, no swing, stop the moment the traps start doing it.",posture: "Shoulder blades back" }
      ]}
    ]
  },
  {
    id: "lower-b", label: "Lower B", focus: "Single-leg, rotation & glutes",
    type: "lower", color: "#C8F25A",
    phases: [
      { name: "Workout", sub: "No rest inside a superset, about 60 sec between rounds. The pace is the conditioning. Golf tomorrow? First two groups only, same weight.", rows: [
        { ss: "1",ord: "1A",ex: "Twisting Lunges with 45 lb plate",link: "https://www.instagram.com/reel/DZS4JCpSqFh/?igsh=MTFtZms4b2N6ZjRnNA==",brace: true,rp: "3 x 8 / side",note: "Plate held at the chest. Lunge forward and rotate the upper body toward the lead leg at the bottom, then drive back up and switch sides. Rotation under load." },
        { ss: "",ord: "1B",ex: "Lying Plate Pass (25 lb)",link: "https://www.youtube.com/watch?v=y-y-EKnieNA",rp: "3 x 10",note: "On your back, plate overhead, pass it onto your shins, straighten the legs and send it back the other way. Low back glued to the floor." },
        { ss: "",ord: "1C",ex: "Calf Raises OR Lateral Band Walks",link: "https://www.youtube.com/watch?v=A12uKYg-Kuo",rp: "15 reps / 15 steps" },
        { ss: "2",ord: "2A",ex: "Rear-Foot Elevated Box Lunge",link: "https://www.youtube.com/results?search_query=rear+foot+elevated+split+squat",brace: true,rp: "3 x 8 / side",note: "Back foot up on the box, weight held in one arm, drop deep. Keep the lead knee tracking over your toes, don't let it cave inward." },
        { ss: "",ord: "2B",ex: "Single-Leg RDL (Kettlebell)",link: "https://www.youtube.com/watch?v=Zfr6wizR8rs",brace: true,rp: "3 x 8 / side",note: "Almost-straight working leg, hinge forward and lower the bell toward the floor, then stand back up. Hamstring, glute and balance in one." },
        { ss: "",ord: "2C",ex: "Side Plank (top leg raised)",link: "https://www.youtube.com/watch?v=PAD7sMmIgts",rp: "30 sec / side",note: "Anti-lean core. Stack the hips, don't let them sag back." },
        { ss: "3",ord: "3A",ex: "Belted Glute Press (Machine)",link: "https://www.youtube.com/results?search_query=machine+hip+thrust+belt",rp: "3 x 12",note: "On your back with the belt across the hips, drive up and squeeze the glutes at the top. Pause, then lower under control." },
        { ss: "",ord: "3B",ex: "Slider Hamstring Curl",link: "https://www.youtube.com/results?search_query=slider+hamstring+curl",rp: "3 x 10",note: "On your back, heels on sliders or towels, bridge up and slide the heels out and back. Hamstrings working hard without loading the low back." },
        { ss: "",ord: "3C",ex: "Pallof Press (with hold)",link: "https://www.youtube.com/watch?v=HXrLaqNIkTs",rp: "3 x 8 / side",note: "Press out, hold 3 sec, resist the pull - anti-rotation core for the swing." }
      ]}
    ]
  },
  {
    id: "upper-b", label: "Upper B", focus: "Pull-biased, TRX & the pull-up giant set",
    type: "upper", color: "#7CC4FF",
    phases: [
      { name: "Workout", sub: "No rest inside a superset, about 60 sec between rounds. The pace is the conditioning.", rows: [
        { ss: "1",ord: "1A",ex: "Single-Arm Dumbbell Row (supported)",link: "https://www.youtube.com/results?search_query=Single-Arm+Dumbbell+Row+(supported)",rp: "3 x 10 / side",note: "One hand and one knee on the bench, pull the bell to the hip. Back flat, no twist.",posture: "Head back, shoulder blades back" },
        { ss: "",ord: "1B",ex: "Feet-Elevated Push-Ups (feet on box)",link: "https://www.youtube.com/watch?v=4aUUcfwyfE0",brace: true,rp: "3 x 10-12",note: "Box sits under the TRX - loads the upper chest and front delts." },
        { ss: "",ord: "1C",ex: "TRX Fallout OR GHD Sit-Ups",link: "https://www.youtube.com/watch?v=3X8UHOVMXuQ",rp: "3 x 8-10",note: "Arms out in front, lean forward and let the arms travel overhead - anti-extension, same job as an ab wheel. Squeeze the glutes and tuck the pelvis first; the moment the low back arches you've gone too far." },
        { ss: "2",ord: "2A",ex: "Pull-Up Giant Set",link: "https://www.youtube.com/watch?v=UA5J55gATzo",rp: "1 set each variation",note: "Standard / Chin-Up / Wide / Neutral, back to back. Lean into the Chin-Ups - that's where the biceps drive. Loop a light band under a foot to push past the first few reps.",posture: "Head back, shoulder blades back" },
        { ss: "",ord: "2B",ex: "Rope Tricep Pushdown",link: "https://www.youtube.com/results?search_query=rope+tricep+pushdown",brace: true,rp: "3 x 12",note: "Pull then push, no wasted rest. Elbows tucked, split the rope at the bottom." },
        { ss: "",ord: "2C",ex: "Hanging Leg or Knee Raise",link: "https://www.youtube.com/watch?v=Pr1ieGZ5atk",rp: "3 x 10-12",note: "Same bar you're already hanging from - straight legs or bent knees, whichever you can control. Slow on the way down, no swing." },
        { ss: "3",ord: "3A",ex: "Hanging TRX Row",link: "https://www.youtube.com/watch?v=N_14s8zFOms",rp: "Heavy / 3 x 10",note: "Straps set short, squeeze the shoulder blades. Walk the feet forward to make it harder.",posture: "Head back, shoulder blades back" },
        { ss: "",ord: "3B",ex: "TRX Bicep Curl",link: "https://www.youtube.com/watch?v=Pa8Mls8saXc",rp: "3 x 12-15",note: "Lean back, elbows high, curl your body up. Straps are already set from the rows." },
        { ss: "",ord: "3C",ex: "Swimming Circles",link: "https://www.youtube.com/watch?v=6fPl70d17sY",rp: "3 x 10",note: "Face down, lift chest and legs, small circles with the arms - the extension side of the trunk, and a posture reset for the laptop hours.",posture: "Head back, shoulder blades back" }
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

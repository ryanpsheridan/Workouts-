const WARMUPS = {
  "lower-a": [ // prior: Upper B (pull day) -> lats, upper back, biceps, forearms
    { ss: "1", ord: "1A", ex: "Toe Rockback to Deep Squat", rp: "8 reps", note: "Kneel, toes tucked, hands down. Rock back onto heels into a deep squat, then forward - stretches ankles back, low back down." },
    { ss: "",  ord: "1B", ex: "Open Books", link: "https://www.youtube.com/watch?v=rDviWORCWEw", rp: "8 / side", note: "Frees up t-spine rotation after yesterday's pulling." },
    { ss: "2", ord: "2A", ex: "Bretzel", link: "https://www.youtube.com/watch?v=1U2RPN5vAWQ", rp: "5 breaths / side", note: "Goes first on purpose - it unlocks the 90/90 that follows. T-spine and hip in one." },
    { ss: "",  ord: "2B", ex: "90/90 Hip Switches", link: "https://www.youtube.com/watch?v=qq_Z7sAmVrA", rp: "8 / side", note: "Internal + external hip rotation. Chest tall, hips do the work. Sit up on a block or a plate if you can't stay upright hands-free - elevating the hips beats fighting for the position. Extra reps on the tighter side." },
    { ss: "",  ord: "2C", ex: "90/90 Hip Lift-Off", link: "https://www.youtube.com/watch?v=sLWSmo0uk2E", rp: "5 x 5 sec / side", note: "From the 90/90 you're already sitting in: lift the back knee and shin off the floor and hold, without leaning. Turns the passive range you just opened into range you actually own. This is the one that changes internal rotation long-term - stretching alone mostly rents it.", posture: "Shoulder blades back" },
    { ss: "",  ord: "2D", ex: "World's Greatest Stretch", rp: "5 / side", note: "Full hip opener with a thoracic reach at the top - prep for the twisting lunges and chops ahead." },
    { ss: "3", ord: "3A", ex: "Single-Leg Glute Bridge (2 sec hold)", rp: "10 / side", note: "One foot down forces each side to work full before the session." },
    { ss: "",  ord: "3B", ex: "Lateral Band Walks", rp: "15 steps / side", note: "Switches on the glute med for the single-leg work ahead." },
    { ss: "4", ord: "4A", ex: "Dead Hang", rp: "30-60 sec", note: "Decompress the spine, stretch grip and lats. If the neck is sore, hang active - shoulders pulled down away from the ears." },
    { ss: "5", ord: "5A", ex: "Squat Rock (Deep Squat to Hands-Behind Roll)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "20 reps/day", note: "Deep squat, feet flat, hands planted flat on the floor behind the hips - rock/roll the knees forward while keeping the hands down, bear-crawl style, then back to the squat. Great warm-up and activation for the belly pooch/core." },
    { ss: "6", ord: "6A", ex: "Wide-Legged Standing Forward Fold", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "60 sec/day", note: "Feet wide, hands clasped behind the back, fold forward - releases tight hamstrings." },
    { ss: "7", ord: "7A", ex: "Reverse Tabletop Hip Lifts", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "30 reps", note: "Reverse plank pulses - lift the hips up and down. Strengthens the core and relaxes the lower back." },
    { ss: "8", ord: "8A", ex: "Seated Spinal Twist (Arms Raised Overhead)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "20 reps", note: "One leg bent in front, rotate the torso, hands clasped up high. Fixes pelvic tilt and relieves back pain." },
    { ss: "9", ord: "9A", ex: "Child's Pose (Hands Clasped Behind Head)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "hold daily", note: "Kneeling forward fold, elbows pointing down, opening the upper back. Opens the thoracic spine and corrects rounded shoulders." }
  ],
  "upper-a": [ // today: PRESS/carries/arms. prior: Lower A -> glutes, quads, hip flexors
    { ss: "1", ord: "1A", ex: "Foam Roll Thoracic Extensions", rp: "5 reps x 3 spots", note: "Roller across the mid-back, hands behind the head, ribs down. Extend back over it, come up, move the roller an inch, repeat. Extension - the direction the desk takes away." },
    { ss: "",  ord: "1B", ex: "TRX Chest Opener", rp: "30-45 sec x 2", note: "Handles long, arms out wide in a T, lean forward and let the chest sink between them. Straps are already up for the rows later." },
    { ss: "",  ord: "1C", ex: "Wall Angels", rp: "10 reps", note: "Back to the wall, head resting against it without craning, low back flat. Arms in a goalpost, slide them overhead and back down, keeping wrists and elbows on the wall as long as they'll stay. Wherever you lose contact is the range the desk took - work there, don't force it. Puts the head back over the shoulders and gets the blades moving before you press.", posture: "Head back, shoulder blades back" },
    { ss: "2", ord: "2A", ex: "Shoulder CARs", rp: "5 / side", note: "Slow full circles each shoulder - best prep before pressing." },
    { ss: "",  ord: "2B", ex: "Band Pull-Aparts", rp: "15 reps", note: "Rear delts + mid-back on to balance the pressing ahead.", posture: "Shoulder blades back" },
    { ss: "3", ord: "3A", ex: "TRX Y-Fly", link: "https://www.youtube.com/watch?v=YsJ3QUfzU48", rp: "2 x 10", note: "Lean back on the straps, arms overhead in a Y, pull your chest up through them. Walk the feet in to make it easier. Check where you feel it: below and between the shoulder blades is right. If it burns at the top of the shoulders or base of the neck, you're shrugging into it - walk the feet back, go slower, cut the range.", posture: "Shoulder blades back" },
    { ss: "",  ord: "3B", ex: "Thoracic Rotations", rp: "10 / side", note: "Frees the mid-back so the press stays off the low back." },
    { ss: "4", ord: "4A", ex: "90/90 Hip Switches", link: "https://www.youtube.com/watch?v=qq_Z7sAmVrA", rp: "8 / side", note: "Loosens hips from yesterday, keeps golf rotation moving. Sit up on a block or plate if you can't stay upright hands-free. Extra reps on the tighter side." },
    { ss: "",  ord: "4B", ex: "Wall Hip Flexor Stretch", rp: "30 sec / side", note: "Opens hip flexors from yesterday's lunges." },
    { ss: "",  ord: "4C", ex: "Bird-Dogs", link: "https://www.youtube.com/watch?v=g_BYB0R-4Ws", rp: "10 / side", note: "Gentle core switch-on, back stays flat." },
    { ss: "5", ord: "5A", ex: "Dead Hang", rp: "30-60 sec", note: "Decompress the spine, wake up the grip for the carries. If the neck is sore, hang active - shoulders pulled down away from the ears, not shrugged up around them." },
    { ss: "6", ord: "6A", ex: "Reverse Tabletop Hip Lifts", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "30 reps", note: "Reverse plank pulses - lift the hips up and down. Strengthens the core and relaxes the lower back before pressing." },
    { ss: "7", ord: "7A", ex: "Seated Spinal Twist (Arms Raised Overhead)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "20 reps", note: "One leg bent in front, rotate the torso, hands clasped up high. Fixes pelvic tilt and relieves back pain." },
    { ss: "8", ord: "8A", ex: "Child's Pose (Hands Clasped Behind Head)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "hold daily", note: "Kneeling forward fold, elbows pointing down, opening the upper back. Opens the thoracic spine and corrects rounded shoulders." }
  ],
  "lower-b": [ // prior: Upper A (press day) -> chest, front delts, triceps, traps
    { ss: "1", ord: "1A", ex: "Open Books", link: "https://www.youtube.com/watch?v=rDviWORCWEw", rp: "8 / side", note: "Opens the chest/upper back tight from yesterday's presses." },
    { ss: "",  ord: "1B", ex: "TRX Chest Opener", rp: "30-45 sec x 2", note: "Handles long, arms out wide in a T, lean forward and let the chest sink. Yesterday was pressing and carries - this is the day the chest most needs it." },
    { ss: "",  ord: "1C", ex: "Band Pull-Aparts", rp: "15 reps", note: "Wakes rear delts, undoes yesterday's pressing posture.", posture: "Shoulder blades back" },
    { ss: "2", ord: "2A", ex: "Bretzel", link: "https://www.youtube.com/watch?v=1U2RPN5vAWQ", rp: "5 breaths / side", note: "First again - it opens the trunk so the hip work below actually lands. Breathe and sink deeper each rep." },
    { ss: "",  ord: "2B", ex: "Hip Internal Rotation Stretch", rp: "30 sec / side", note: "Rotate the shin inward, sink into the back of the hip - the range golf hammers. Right side is the restricted one: run it 2:1, two holds right for every one left." },
    { ss: "3", ord: "3A", ex: "Adductor Rocks", link: "https://www.youtube.com/watch?v=yF8o6I6aSZg", rp: "10 reps", note: "Rock hips back on all fours - opens the groin for step-ups." },
    { ss: "",  ord: "3B", ex: "Cossack Squats", link: "https://www.youtube.com/watch?v=j-595dZdDkA", rp: "6 / side", note: "Slow and controlled - lateral hip and ankle mobility." },
    { ss: "4", ord: "4A", ex: "Single-Leg Glute Bridge (2 sec hold)", rp: "10 / side", note: "Activates glutes/hamstrings before the heavier lower work." },
    { ss: "",  ord: "4B", ex: "Hip Airplanes", link: "https://www.youtube.com/watch?v=4XCbYaQGF2o", rp: "5 / side", note: "Stand on one leg, hinge to a flat-back tabletop, then rotate the pelvis open and closed over the planted hip. Slow - this is internal rotation under load on a single leg, which is exactly what the backswing asks of the trail hip. Hold a rack or wall if you wobble.", posture: "Shoulder blades back" },
    { ss: "5", ord: "5A", ex: "Dead Hang", rp: "30-60 sec", note: "Decompress the spine, wake up the grip. If the neck is sore, hang active - shoulders pulled down away from the ears." },
    { ss: "6", ord: "6A", ex: "Squat Rock (Deep Squat to Hands-Behind Roll)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "20 reps/day", note: "Deep squat, feet flat, hands planted flat on the floor behind the hips - rock/roll the knees forward while keeping the hands down, bear-crawl style, then back to the squat. Great warm-up and activation for the belly pooch/core." },
    { ss: "7", ord: "7A", ex: "Wide-Legged Standing Forward Fold", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "60 sec/day", note: "Feet wide, hands clasped behind the back, fold forward - releases tight hamstrings before the step-ups and RDLs." },
    { ss: "8", ord: "8A", ex: "Seated Spinal Twist (Arms Raised Overhead)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "20 reps", note: "One leg bent in front, rotate the torso, hands clasped up high. Fixes pelvic tilt and relieves back pain." },
    { ss: "9", ord: "9A", ex: "Child's Pose (Hands Clasped Behind Head)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "hold daily", note: "Kneeling forward fold, elbows pointing down, opening the upper back. Opens the thoracic spine and corrects rounded shoulders." }
  ],
  "upper-b": [ // today: PULL/giant set/TRX. prior: Lower B -> glutes, quads, hamstrings, calves
    { ss: "1", ord: "1A", ex: "Foam Roll Thoracic Extensions", rp: "5 reps x 3 spots", note: "Roller across the mid-back, hands behind the head, ribs down. Extend back over it, shift an inch, repeat - work up toward the shoulder blades." },
    { ss: "",  ord: "1B", ex: "Upper Trap + Levator Stretch", rp: "30 sec / side", note: "Sit on one hand so the shoulder can't ride up. Ear toward the opposite shoulder for the upper trap; then turn the nose down toward the armpit for the levator. Light pull with the free hand, no cranking. These two are what tighten from a day at the screen, and they're the ones that bark during hangs and carries." },
    { ss: "2", ord: "2A", ex: "Dead Hang", rp: "30-60 sec", note: "Decompress the spine, pre-stretch the lats for the giant set. If the neck is sore, hang active - shoulders pulled down away from the ears." },
    { ss: "",  ord: "2B", ex: "Scapular Pull-Ups", rp: "8 reps", note: "Hang and shrug the shoulder blades down - primes the back for pulling.", posture: "Head back, shoulder blades back" },
    { ss: "3", ord: "3A", ex: "Band Pull-Aparts", rp: "15 reps", note: "Rear delt + mid-back activation before rows and pull-ups.", posture: "Shoulder blades back" },
    { ss: "",  ord: "3B", ex: "Thoracic Rotations", rp: "10 / side", note: "Frees the mid-back so the shoulders move clean." },
    { ss: "4", ord: "4A", ex: "90/90 Hip Switches", link: "https://www.youtube.com/watch?v=qq_Z7sAmVrA", rp: "8 / side", note: "Loosens hips still cooked from Lower B. Sit up on a block or plate if you can't stay upright hands-free. Extra reps on the tighter side." },
    { ss: "",  ord: "4B", ex: "Wall Hip Flexor Stretch", rp: "30 sec / side", note: "Opens hip flexors after yesterday's sled and step-ups." },
    { ss: "5", ord: "5A", ex: "Dead Bug", link: "https://www.youtube.com/watch?v=g_BYB0R-4Ws", rp: "8 / side", note: "Deep core wake-up, back glued to the floor." },
    { ss: "6", ord: "6A", ex: "Reverse Tabletop Hip Lifts", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "30 reps", note: "Reverse plank pulses - lift the hips up and down. Strengthens the core and relaxes the lower back before the pull-up giant set." },
    { ss: "7", ord: "7A", ex: "Seated Spinal Twist (Arms Raised Overhead)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "20 reps", note: "One leg bent in front, rotate the torso, hands clasped up high. Fixes pelvic tilt and relieves back pain." },
    { ss: "8", ord: "8A", ex: "Child's Pose (Hands Clasped Behind Head)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "hold daily", note: "Kneeling forward fold, elbows pointing down, opening the upper back. Opens the thoracic spine and corrects rounded shoulders." }
  ],
  "light-upper": [ // easy day, no prior day to undo - just wake the shoulders up before light press/pull
    { ss: "1", ord: "1A", ex: "Wall Angels", rp: "10 reps", note: "Back to the wall, low back flat. Slide arms overhead and back down. Gets the shoulder blades moving without loading anything.", posture: "Head back, shoulder blades back" },
    { ss: "",  ord: "1B", ex: "Shoulder CARs", rp: "5 / side", note: "Slow full circles - just greasing the joint, not chasing a stretch." },
    { ss: "2", ord: "2A", ex: "Band Pull-Aparts", rp: "12 reps", note: "Light activation for the upper back before anything pushes or pulls.", posture: "Shoulder blades back" },
    { ss: "",  ord: "2B", ex: "Dead Hang", rp: "20-30 sec", note: "Easy hang, not a max effort - just decompresses the spine and opens the lats." },
    { ss: "3", ord: "3A", ex: "Seated Spinal Twist (Arms Raised Overhead)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "20 reps", note: "One leg bent in front, rotate the torso, hands clasped up high. Fixes pelvic tilt and relieves back pain." },
    { ss: "4", ord: "4A", ex: "Child's Pose (Hands Clasped Behind Head)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "hold daily", note: "Kneeling forward fold, elbows pointing down, opening the upper back. Opens the thoracic spine and corrects rounded shoulders." }
  ],
  "light-lower": [ // easy day, no prior day to undo - short and easy, saves the tank for light squats/hinges
    { ss: "1", ord: "1A", ex: "Toe Rockback to Deep Squat", rp: "6 reps", note: "Kneel, toes tucked, hands down. Rock back onto heels into a deep squat, then forward - just enough to open the ankles and hips before squatting light." },
    { ss: "",  ord: "1B", ex: "90/90 Hip Switches", link: "https://www.youtube.com/watch?v=qq_Z7sAmVrA", rp: "6 / side", note: "A few easy reps each way, not chasing a deep stretch today." },
    { ss: "2", ord: "2A", ex: "Single-Leg Glute Bridge (2 sec hold)", rp: "8 / side", note: "Light activation so the glutes take their share of the squats and hinges." },
    { ss: "3", ord: "3A", ex: "Squat Rock (Deep Squat to Hands-Behind Roll)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "20 reps/day", note: "Deep squat, feet flat, hands planted flat on the floor behind the hips - rock/roll the knees forward while keeping the hands down, bear-crawl style, then back to the squat. Great warm-up and activation for the belly pooch/core." },
    { ss: "4", ord: "4A", ex: "Wide-Legged Standing Forward Fold", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "60 sec/day", note: "Feet wide, hands clasped behind the back, fold forward - releases tight hamstrings." },
    { ss: "5", ord: "5A", ex: "Seated Spinal Twist (Arms Raised Overhead)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "20 reps", note: "One leg bent in front, rotate the torso, hands clasped up high. Fixes pelvic tilt and relieves back pain." },
    { ss: "6", ord: "6A", ex: "Child's Pose (Hands Clasped Behind Head)", link: "https://x.com/smartpostures/status/2089006502413840469?s=46", rp: "hold daily", note: "Kneeling forward fold, elbows pointing down, opening the upper back. Opens the thoracic spine and corrects rounded shoulders." }
  ]
};

const DAYS = [
  {
    id: "lower-a", label: "Lower A", focus: "Power, rotation & the GHD core block",
    color: "#2563eb", soft: "#eef4ff",
    phases: [
      { name: "Power & prime", sub: "Golf tomorrow? Skip this block - the landings cost the most", rows: [
        { ss: "1", ord: "1A", ex: "Box Jumps", link: "https://www.youtube.com/watch?v=YLPQsdRDmB0", rp: "3 x 4", note: "Done first, while fresh. Step down every rep, land soft and quiet - control over height." },
        { ss: "",  ord: "1B", ex: "Med Ball Rotational Slam OR Cable Rotational Chop", link: "https://www.youtube.com/watch?v=W_4eq6r00zw", rp: "3 x 5 / side", note: "Load the trail hip, fire through with full rotation. Explosive - spikes the heart rate early." }
      ]},
      { name: "Strength", sub: "Golf tomorrow? First two groups only, same weight - cut sets, never load", rows: [
        { ss: "1", ord: "1A", ex: "Smith Machine Lunges OR Hack Squat", brace: true, rp: "6, 4, 2, 1", note: "Heavy quad strength. Keep the lead knee tracking over your toes, don't let it cave inward." },
        { ss: "",  ord: "1B", ex: "Lateral Band Walks", rp: "15 steps / side" },
        { ss: "2", ord: "2A", ex: "Twisting Lunges with 45 lb plate", brace: true, link: "https://www.instagram.com/reel/DZS4JCpSqFh/?igsh=MTFtZms4b2N6ZjRnNA==", rp: "4 x 8 / side", note: "Rotate the plate over the front leg - rotation under load. Keep the lead knee tracking over your toes." },
        { ss: "",  ord: "2B", ex: "Side Plank (top leg raised)", link: "https://www.youtube.com/watch?v=PAD7sMmIgts", rp: "30-40 sec / side", note: "Same anti-lean core the carry was here for, with nothing hanging off the shoulders. Stack the hips, don't let them sag back. Carries now live on Upper A only." },
        { ss: "3", ord: "3A", ex: "Half-Kneeling Cable Chop (High-to-Low)", brace: true, link: "https://www.youtube.com/watch?v=tKmTgQ_YajY", rp: "3 x 10 / side", note: "Golf downswing pattern - drive with hips and core, arms just connect. Single-Leg RDLs used to sit here; they run on Lower B only now, so the deepest hamstring stretch of the week happens once instead of twice. Reverse hypers in the core block still cover the posterior chain today." }
      ]},
      { name: "Core & finisher", sub: "EMOM x 3 rounds - one exercise per minute, rest is whatever's left of it", rows: [
        { ss: "1", ord: "1A", ex: "GHD Sit-Ups", rp: "12-15", note: "Same machine as the reverse hypers - flow straight between the two." },
        { ss: "",  ord: "1B", ex: "GHD Reverse Hyperextension", rp: "12-15", note: "Legs to parallel, squeeze the glutes at the top - not the low back. Slow, no momentum." },
        { ss: "",  ord: "1C", ex: "Sled Push (Forward + Backward) OR Heavy Kettlebell Swings", brace: true, rp: "40 yds", note: "The conditioning is the density here, not a separate machine. Forward drives the quads, backward is knee-friendly. Swap in KB swings if the sled's taken." }
      ]}
    ]
  },
  {
    id: "upper-a", label: "Upper A", focus: "Press, carries & arms in motion",
    color: "#0891b2", soft: "#e2f7fb",
    phases: [
      { name: "Power & prime", rows: [
        { ss: "1", ord: "1A", ex: "Med Ball Perpendicular Throw", link: "https://www.youtube.com/watch?v=D3puZb7vzjQ", rp: "3 x 6 / side", note: "Stand sideways to the wall, load the trail hip, throw through the ball - feet, hips, torso, arms." },
        { ss: "",  ord: "1B", ex: "Explosive / Plyo Push-Ups", rp: "2 x 5", note: "Leave the floor, land soft - upper-body power while fresh." }
      ]},
      { name: "Strength", rows: [
        { ss: "1", ord: "1A", ex: "Chin-Ups", rp: "3 x AMRAP", note: "Underhand grip, your most bicep-dominant pull - placed early while strong. Band-assist for honest reps.", posture: "Head back, shoulder blades back" },
        { ss: "",  ord: "1B", ex: "Alternating Incline Curl-to-Press", brace: true, rp: "3 x 8 / side", note: "One arm at a time: curl from a full stretch, keep it moving into a straight overhead press. Lower the same path, then switch. Up here it gets your fresh shoulders instead of leftovers - press quality is the point, so keep the load honest." },
        { ss: "2", ord: "2A", ex: "Half-Kneeling Landmine Press", brace: true, link: "https://www.youtube.com/watch?v=LN1zCeoIfbE", rp: "3 x 8 / side", note: "Half-kneel forces core + anti-lean - golf-friendly overhead strength. Press with the arm on the same side as your down (kneeling) knee." },
        { ss: "",  ord: "2B", ex: "Hanging TRX Row", rp: "3 x 10", note: "Straps are right there - pull the chest to the handles.", posture: "Head back, shoulder blades back" },
        { ss: "3", ord: "3A", ex: "Standing Band Raises", rp: "3 x 12-15", note: "Stand on the band, arms out to the sides to shoulder height, slow on the way down. Side delts - the head that gets the least work when everything else is pressing forward. Light band, no swing, stop the moment the traps start doing it.", posture: "Shoulder blades back" },
        { ss: "",  ord: "3B", ex: "Farmer's Carry", brace: true, rp: "45s / 3 x 30 yds", note: "Was 3 x 80 yds on three separate days - nine long trips a week, with no recovery for the traps in between. Now the only carry day. Set them down the moment posture changes, even at 20 yds. Once the neck is quiet, add a second day or more weight - never longer trips.", posture: "Head back, shoulder blades back" },
        { ss: "",  ord: "3C", ex: "Hanging Leg Raise", rp: "3 x 10-12", note: "Straight or bent knees - control the descent, no swing. Core insurance before the finisher." }
      ]},
      { name: "Core & finisher", sub: "EMOM x 3 rounds - one exercise per minute, rest is whatever's left of it", rows: [
        { ss: "1", ord: "1A", ex: "Lying Plate Pass", rp: "10", note: "Lower the plate behind your head, lift and pass it onto your shins, lower the legs, reverse. Low back glued to the floor." },
        { ss: "",  ord: "1B", ex: "Pallof Press (with hold)", link: "https://www.youtube.com/watch?v=HXrLaqNIkTs", rp: "8 / side", note: "Press out, hold 3 sec, resist the pull. Anti-rotation is the quality the swing leans on hardest." },
        { ss: "",  ord: "1C", ex: "Hammer Curls", rp: "12", note: "Keeps the minute moving and finishes the arms off - forearm and bicep with nothing left to set up." }
      ]}
    ]
  },
  {
    id: "lower-b", label: "Lower B", focus: "Unilateral, sprint & the heavy sled",
    color: "#7c3aed", soft: "#f1ecfe",
    phases: [
      { name: "Power & prime", sub: "Golf tomorrow? Skip this block - the landings cost the most", rows: [
        { ss: "1", ord: "1A", ex: "Broad Jumps", link: "https://www.youtube.com/watch?v=GR5JVcHHS_Q", rp: "3 x 4", note: "Fresh legs first. Stick and hold each landing - control beats distance." },
        { ss: "",  ord: "1B", ex: "Skater Bounds", link: "https://www.youtube.com/watch?v=G5tsTOqrkec", rp: "3 x 5 / side", note: "Lateral bound, stick the landing on one leg - balance and athleticism." }
      ]},
      { name: "Strength", sub: "Golf tomorrow? First two groups only, same weight - cut sets, never load", rows: [
        { ss: "1", ord: "1A", ex: "Offset Step-Ups", brace: true, rp: "4 x 6 / side", note: "Push through heel on the way up." },
        { ss: "",  ord: "1B", ex: "Walking Lunges", brace: true, rp: "25 yds", note: "Stay low and smooth off the step-ups. Keep the lead knee tracking over your toes." },
        { ss: "2", ord: "2A", ex: "Single-Leg Press (Machine)", rp: "3 x 10-12 / side", note: "Press through the toes - quad focus." },
        { ss: "",  ord: "2B", ex: "Calf Raises OR Lateral Band Walks", rp: "15 reps / 15 steps" },
        { ss: "3", ord: "3A", ex: "Single-Leg DB RDL", brace: true, link: "https://www.youtube.com/watch?v=Zfr6wizR8rs", rp: "3 x 8 / side", note: "Hamstring, glute, and balance. DB in the hand opposite the working leg." },
        { ss: "",  ord: "3B", ex: "Pallof Press (with hold)", link: "https://www.youtube.com/watch?v=HXrLaqNIkTs", rp: "3 x 8 / side", note: "Press out, hold 3 sec, resist the pull - anti-rotation core for the swing." },
        { ss: "",  ord: "3C", ex: "TRX Y-Fly OR Prone Y Raise", link: "https://www.youtube.com/watch?v=YsJ3QUfzU48", rp: "3 x 12", note: "Arms overhead in a Y, thumbs up, drive from below the shoulder blades - no shrug, neck stays long. Reach long first, then lift. Should burn below the shoulder blades; if it lands at the top of the shoulders, ease off until it doesn't.", posture: "Shoulder blades back" }
      ]},
      { name: "Core & finisher", sub: "EMOM x 3 rounds - one exercise per minute, rest is whatever's left of it", rows: [
        { ss: "1", ord: "1A", ex: "Hanging Leg Raise OR Captain's Chair Knee Raise", rp: "10-12", note: "Curl the knees to the chest, control the lower - no swing. Loaded lower-ab work that actually leaves you sore." },
        { ss: "",  ord: "1B", ex: "Side Plank (top leg raised)", link: "https://www.youtube.com/watch?v=PAD7sMmIgts", rp: "30 sec / side", note: "Anti-lean core, the other half of what the carries used to cover. Stack the hips, don't let them sag back." },
        { ss: "",  ord: "1C", ex: "Heavy Sled Push OR Weighted Step-Ups (fast tempo)", brace: true, rp: "20 yds", note: "One trip inside the minute - load it up and grind, forward only. Swap to step-ups if the sled's taken." }
      ]}
    ]
  },
  {
    id: "upper-b", label: "Upper B", focus: "Pull-biased, TRX & the pull-up giant set",
    color: "#059669", soft: "#dff5ec",
    phases: [
      { name: "Power & prime", rows: [
        { ss: "1", ord: "1A", ex: "Med Ball Slams", link: "https://www.youtube.com/watch?v=EsAhU1jHpiQ", rp: "3 x 6", note: "Explosive overhead slam, full effort down, reset each rep - heart rate up before you touch a weight." },
        { ss: "",  ord: "1B", ex: "Explosive / Plyo Push-Ups", rp: "2 x 5", note: "Push hard enough to leave the floor - land soft into the next rep." }
      ]},
      { name: "Strength", rows: [
        { ss: "1", ord: "1A", ex: "Pull-Up Giant Set", rp: "1 set each variation", note: "Standard / Chin-Up / Wide / Neutral, back to back. Lean into the Chin-Ups - that's where the biceps drive. Loop a light band under a foot to push past the first few reps.", posture: "Head back, shoulder blades back" },
        { ss: "",  ord: "1B", ex: "Overhead Tricep Extension (rope)", brace: true, rp: "3 x 12", note: "Pull then push, no wasted rest. Elbows tucked, full stretch overhead." },
        { ss: "",  ord: "1C", ex: "Hanging Leg or Knee Raise", rp: "3 x 10-12", note: "Same bar you're already hanging from - straight legs or bent knees, whichever you can control. Slow on the way down, no swing." },
        { ss: "2", ord: "2A", ex: "Hanging TRX Row", rp: "Heavy / 3 x 10", note: "Straps set short, squeeze the shoulder blades. Walk the feet forward to make it harder.", posture: "Head back, shoulder blades back" },
        { ss: "",  ord: "2B", ex: "Feet-Elevated Push-Ups (feet on box)", brace: true, rp: "3 x 10-12", note: "Box sits under the TRX - loads the upper chest and front delts." }
      ]},
      { name: "Core & finisher", sub: "EMOM x 3 rounds - one exercise per minute, rest is whatever's left of it", rows: [
        { ss: "1", ord: "1A", ex: "TRX Bicep Curl", rp: "12-15", note: "Lean back, elbows high, curl your body up. Straps are already set from the rows." },
        { ss: "",  ord: "1B", ex: "TRX Fallout OR GHD Sit-Ups", link: "https://www.youtube.com/watch?v=3X8UHOVMXuQ", rp: "8-10", note: "Straps in hand, arms out in front, lean forward and let the arms travel overhead - same anti-extension job as an ab wheel, on equipment this gym actually has. Squeeze the glutes and tuck the pelvis first; the moment the low back arches you've gone too far. Walk the feet back to make it harder." },
        { ss: "",  ord: "1C", ex: "Swimming Circles", rp: "10", note: "Face down, lift chest and legs, small circles with the arms - the extension side of the trunk, and a posture reset for the laptop hours.", posture: "Head back, shoulder blades back" }
      ]}
    ]
  },
  {
    id: "light-upper", label: "Light Upper", focus: "Blood flow only - light press & pull, nothing that leaves you sore for golf",
    color: "#f59e0b", soft: "#fef3d9",
    phases: [
      { name: "Light strength", sub: "Half the usual weight, every set stops 3-4 reps short of failure - smooth reps, no grinding", rows: [
        { ss: "1", ord: "1A", ex: "Incline DB Press (light)", rp: "3 x 12", note: "Light dumbbells, controlled up and down - this is blood flow, not a workout to beat next time." },
        { ss: "",  ord: "1B", ex: "Hanging TRX Row (light)", rp: "3 x 12", note: "Straps set long so it's an easy pull. Match the press set for set - press and pull stay balanced today.", posture: "Head back, shoulder blades back" },
        { ss: "2", ord: "2A", ex: "Band-Assisted or Ring Rows", rp: "2 x 10", note: "Easy pulling volume, well short of grip or lat fatigue - nothing that'll bother a golf grip tomorrow." },
        { ss: "",  ord: "2B", ex: "Standing Band Raises (light band)", rp: "2 x 15", note: "Side delts, light band, no swing. Stop the moment the traps take over.", posture: "Shoulder blades back" },
        { ss: "3", ord: "3A", ex: "Face Pulls (light band)", rp: "2 x 15", note: "Rear delts and upper back - undoes the desk, doesn't load anything that gets sore." }
      ]},
      { name: "Easy finisher", sub: "One easy pass, not a metabolic finisher", rows: [
        { ss: "1", ord: "1A", ex: "Pallof Press (light, no hold)", rp: "8 / side", note: "Light band, smooth reps - core stays switched on without any grind." },
        { ss: "",  ord: "1B", ex: "Easy Bike or Walk", rp: "5 min", note: "Conversational pace to close it out - legs and grip both stay fresh for tomorrow." }
      ]}
    ]
  },
  {
    id: "light-lower", label: "Light Lower", focus: "Easy squat & hinge pattern - light loads, full range, nothing eccentric-heavy",
    color: "#14b8a6", soft: "#e1f7f4",
    phases: [
      { name: "Light strength", sub: "Half the usual weight, every set stops 3-4 reps short of failure - full depth, easy effort", rows: [
        { ss: "1", ord: "1A", ex: "Goblet Squat (light)", rp: "3 x 12", note: "Light KB or DB, full depth but easy pace - grooves the pattern without loading the eccentric that leaves you sore." },
        { ss: "",  ord: "1B", ex: "Lateral Band Walks", rp: "12 steps / side", note: "Light band, glutes switched on without any real load." },
        { ss: "2", ord: "2A", ex: "Leg Press (light) OR Bodyweight Step-Ups", rp: "3 x 12 / side", note: "Slow and controlled, nowhere near failure - quads get worked, not wrecked." },
        { ss: "",  ord: "2B", ex: "Calf Raises", rp: "2 x 15", note: "Bodyweight or light, smooth tempo." },
        { ss: "3", ord: "3A", ex: "Bird-Dog", link: "https://www.youtube.com/watch?v=g_BYB0R-4Ws", rp: "8 / side", note: "Gentle core switch-on, back stays flat - no loaded hinge today to keep the hamstrings out of it." }
      ]},
      { name: "Easy finisher", sub: "One easy pass, not a metabolic finisher", rows: [
        { ss: "1", ord: "1A", ex: "Dead Bug", link: "https://www.youtube.com/watch?v=g_BYB0R-4Ws", rp: "8 / side", note: "Easy core work, low back glued to the floor." },
        { ss: "",  ord: "1B", ex: "Easy Bike or Walk", rp: "5 min", note: "Conversational pace - done and loose for tomorrow, not cooked." }
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

const human_anatomy = [
  {
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Skin", "Heart", "Lungs"],
    correctAnswer: "Skin",
    explanation:
      "The skin is the largest organ of the human body, covering about 2 square meters.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/Skin_layers.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What type of joint is found in the shoulder?",
    options: [
      "Hinge joint",
      "Ball and socket joint",
      "Pivot joint",
      "Gliding joint",
    ],
    correctAnswer: "Ball and socket joint",
    explanation:
      "The shoulder is a ball-and-socket joint, providing a wide range of motion.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Shoulder_joint.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the brain controls balance and coordination?",
    options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
    correctAnswer: "Cerebellum",
    explanation: "The cerebellum controls balance, posture, and coordination.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Cerebellum.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the function of red blood cells?",
    options: [
      "Transport oxygen",
      "Fight infections",
      "Clot blood",
      "Store nutrients",
    ],
    correctAnswer: "Transport oxygen",
    explanation:
      "Red blood cells carry oxygen from the lungs to the rest of the body.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Red_blood_cells.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the longest bone in the human body?",
    options: ["Femur", "Tibia", "Humerus", "Fibula"],
    correctAnswer: "Femur",
    explanation:
      "The femur, or thighbone, is the longest and strongest bone in the human body.",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Femur.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which muscle is responsible for the movement of the heart?",
    options: [
      "Smooth muscle",
      "Skeletal muscle",
      "Cardiac muscle",
      "Striated muscle",
    ],
    correctAnswer: "Cardiac muscle",
    explanation:
      "Cardiac muscle is found only in the heart, enabling it to contract rhythmically.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Cardiac_muscle.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the eye controls the amount of light entering?",
    options: ["Retina", "Lens", "Cornea", "Iris"],
    correctAnswer: "Iris",
    explanation:
      "The iris adjusts the size of the pupil to control the amount of light that enters the eye.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/2/22/Eye_anatomy.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which organ is responsible for filtering blood in the body?",
    options: ["Liver", "Kidneys", "Lungs", "Pancreas"],
    correctAnswer: "Kidneys",
    explanation:
      "The kidneys filter waste and excess substances from the blood, forming urine.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Kidney_structure.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the main function of platelets in the blood?",
    options: [
      "Transport nutrients",
      "Fight infections",
      "Clot blood",
      "Provide oxygen",
    ],
    correctAnswer: "Clot blood",
    explanation:
      "Platelets help the blood clot to prevent excessive bleeding from injuries.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Platelets.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the human body produces insulin?",
    options: ["Liver", "Pancreas", "Stomach", "Gallbladder"],
    correctAnswer: "Pancreas",
    explanation:
      "The pancreas produces insulin, a hormone that regulates blood sugar levels.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Pancreas.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which protein is found in hair, nails, and skin?",
    options: ["Collagen", "Keratin", "Elastin", "Myosin"],
    correctAnswer: "Keratin",
    explanation:
      "Keratin is the structural protein found in hair, nails, and skin.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Hair_structure.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What type of cells help fight infections?",
    options: ["Red blood cells", "White blood cells", "Platelets", "Neurons"],
    correctAnswer: "White blood cells",
    explanation:
      "White blood cells are essential in defending the body against infections.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/White_blood_cell.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the smallest bone in the human body?",
    options: ["Stapes", "Malleus", "Incus", "Hyoid"],
    correctAnswer: "Stapes",
    explanation:
      "The stapes, located in the ear, is the smallest bone in the human body.",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/2/26/Stapes.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the primary function of the lungs?",
    options: ["Filter toxins", "Pump blood", "Exchange gases", "Digest food"],
    correctAnswer: "Exchange gases",
    explanation:
      "The lungs exchange oxygen and carbon dioxide during respiration.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Lungs_diagram_simple.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the body is responsible for producing bile?",
    options: ["Pancreas", "Gallbladder", "Liver", "Stomach"],
    correctAnswer: "Liver",
    explanation: "The liver produces bile, which helps digest fats.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/e/e8/Liver_structure.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the main function of the large intestine?",
    options: [
      "Digest fats",
      "Absorb nutrients",
      "Absorb water",
      "Produce enzymes",
    ],
    correctAnswer: "Absorb water",
    explanation:
      "The large intestine absorbs water from indigestible food matter and forms waste.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Large_intestine.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which hormone regulates metabolism?",
    options: ["Insulin", "Thyroxine", "Cortisol", "Adrenaline"],
    correctAnswer: "Thyroxine",
    explanation:
      "Thyroxine, produced by the thyroid gland, regulates metabolism.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Thyroid_anatomy.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the brain regulates body temperature?",
    options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
    correctAnswer: "Hypothalamus",
    explanation:
      "The hypothalamus regulates body temperature and maintains homeostasis.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Hypothalamus.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the function of the esophagus?",
    options: [
      "Transport oxygen",
      "Pump blood",
      "Carry food to the stomach",
      "Produce enzymes",
    ],
    correctAnswer: "Carry food to the stomach",
    explanation: "The esophagus carries food from the mouth to the stomach.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Esophagus_diagram.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What type of blood vessel carries blood away from the heart?",
    options: ["Arteries", "Veins", "Capillaries", "Lymph vessels"],
    correctAnswer: "Arteries",
    explanation:
      "Arteries carry oxygenated blood away from the heart to the rest of the body.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Arterial_system_en.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question:
      "Which muscle separates the chest cavity from the abdominal cavity?",
    options: ["Diaphragm", "Pectoral", "Rectus abdominis", "Intercostal"],
    correctAnswer: "Diaphragm",
    explanation:
      "The diaphragm is a dome-shaped muscle that separates the chest and abdominal cavities.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Gray1122.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which organ stores and concentrates bile?",
    options: ["Gallbladder", "Liver", "Pancreas", "Small intestine"],
    correctAnswer: "Gallbladder",
    explanation:
      "The gallbladder stores and concentrates bile before releasing it into the small intestine.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Gallbladder_structure.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which structure connects muscles to bones?",
    options: ["Tendons", "Ligaments", "Cartilage", "Fascia"],
    correctAnswer: "Tendons",
    explanation:
      "Tendons are tough connective tissues that attach muscles to bones.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Tendon_structure.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the brain is responsible for memory?",
    options: ["Cerebrum", "Hippocampus", "Cerebellum", "Thalamus"],
    correctAnswer: "Hippocampus",
    explanation:
      "The hippocampus, located in the temporal lobe, plays a critical role in memory formation.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/3/35/Hippocampus.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the main function of the spleen?",
    options: [
      "Produce insulin",
      "Filter blood",
      "Store calcium",
      "Digest fats",
    ],
    correctAnswer: "Filter blood",
    explanation:
      "The spleen filters blood, removes old red blood cells, and fights infections.",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/3/39/Spleen.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which hormone controls the sleep-wake cycle?",
    options: ["Cortisol", "Melatonin", "Serotonin", "Adrenaline"],
    correctAnswer: "Melatonin",
    explanation:
      "Melatonin, produced by the pineal gland, regulates the sleep-wake cycle.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/Pineal_gland.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the main function of the small intestine?",
    options: [
      "Absorb nutrients",
      "Store bile",
      "Filter toxins",
      "Produce insulin",
    ],
    correctAnswer: "Absorb nutrients",
    explanation: "The small intestine absorbs nutrients from digested food.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Intestinal_villi.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which organ controls blood sugar levels?",
    options: ["Pancreas", "Liver", "Kidneys", "Gallbladder"],
    correctAnswer: "Pancreas",
    explanation:
      "The pancreas regulates blood sugar levels by producing insulin and glucagon.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Pancreas.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the brain is responsible for vision?",
    options: [
      "Occipital lobe",
      "Frontal lobe",
      "Temporal lobe",
      "Parietal lobe",
    ],
    correctAnswer: "Occipital lobe",
    explanation:
      "The occipital lobe, located at the back of the brain, processes visual information.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Brain_lobes.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question:
      "What is the name of the valve between the left atrium and left ventricle?",
    options: [
      "Mitral valve",
      "Aortic valve",
      "Tricuspid valve",
      "Pulmonary valve",
    ],
    correctAnswer: "Mitral valve",
    explanation:
      "The mitral valve allows blood to flow from the left atrium to the left ventricle.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Heart_valves.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the ear helps maintain balance?",
    options: [
      "Cochlea",
      "Eustachian tube",
      "Semicircular canals",
      "Auditory nerve",
    ],
    correctAnswer: "Semicircular canals",
    explanation:
      "The semicircular canals in the inner ear detect head movements and help maintain balance.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Ear_anatomy.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the function of the pituitary gland?",
    options: [
      "Regulate hormones",
      "Produce insulin",
      "Control heart rate",
      "Filter toxins",
    ],
    correctAnswer: "Regulate hormones",
    explanation:
      "The pituitary gland, also known as the 'master gland,' regulates hormones throughout the body.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/Pituitary_gland.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the main function of the liver?",
    options: [
      "Filter toxins",
      "Absorb nutrients",
      "Store oxygen",
      "Produce insulin",
    ],
    correctAnswer: "Filter toxins",
    explanation:
      "The liver detoxifies chemicals and metabolizes drugs in the body.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Human_liver.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which type of joint connects the skull bones?",
    options: [
      "Sutures",
      "Hinge joints",
      "Ball-and-socket joints",
      "Pivot joints",
    ],
    correctAnswer: "Sutures",
    explanation:
      "Sutures are immovable joints that connect the bones of the skull.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/3/37/Human_skull_sutures.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which blood type is known as the universal donor?",
    options: ["A", "B", "O", "AB"],
    correctAnswer: "O",
    explanation:
      "Type O blood can be donated to any other blood type, making it the universal donor.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/Blood_donation_icon.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which organ in the body stores vitamins and minerals?",
    options: ["Liver", "Pancreas", "Kidneys", "Heart"],
    correctAnswer: "Liver",
    explanation:
      "The liver stores essential vitamins and minerals, including vitamins A, D, E, and K.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Human_liver.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the primary function of the kidneys?",
    options: [
      "Regulate blood pressure",
      "Filter waste",
      "Store bile",
      "Produce hormones",
    ],
    correctAnswer: "Filter waste",
    explanation:
      "The kidneys filter waste and excess fluids from the blood to form urine.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Kidney_structure.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What type of tissue connects bones to other bones?",
    options: ["Tendons", "Ligaments", "Cartilage", "Fascia"],
    correctAnswer: "Ligaments",
    explanation:
      "Ligaments are connective tissues that connect bones to other bones at joints.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Ligaments.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the name of the pigment that gives skin its color?",
    options: ["Melanin", "Keratin", "Collagen", "Hemoglobin"],
    correctAnswer: "Melanin",
    explanation:
      "Melanin is the pigment that gives skin, hair, and eyes their color.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Melanin.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the digestive system absorbs the most nutrients?",
    options: ["Small intestine", "Stomach", "Large intestine", "Esophagus"],
    correctAnswer: "Small intestine",
    explanation:
      "The small intestine absorbs most of the nutrients from food during digestion.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Intestinal_villi.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which cells in the body carry oxygen?",
    options: ["Red blood cells", "White blood cells", "Platelets", "Neurons"],
    correctAnswer: "Red blood cells",
    explanation:
      "Red blood cells transport oxygen from the lungs to tissues throughout the body.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Red_blood_cells.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What type of muscle is found in the walls of internal organs?",
    options: [
      "Smooth muscle",
      "Skeletal muscle",
      "Cardiac muscle",
      "Striated muscle",
    ],
    correctAnswer: "Smooth muscle",
    explanation:
      "Smooth muscle is found in the walls of internal organs and helps with involuntary movements.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Smooth_muscle.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which gland controls the body's metabolic rate?",
    options: ["Thyroid", "Pituitary", "Adrenal", "Pineal"],
    correctAnswer: "Thyroid",
    explanation:
      "The thyroid gland regulates the body’s metabolism by producing hormones.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Thyroid_anatomy.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which organ removes carbon dioxide from the blood?",
    options: ["Lungs", "Liver", "Kidneys", "Heart"],
    correctAnswer: "Lungs",
    explanation:
      "The lungs remove carbon dioxide from the blood through exhalation.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Lungs_diagram_simple.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which joint allows the head to rotate?",
    options: [
      "Pivot joint",
      "Hinge joint",
      "Ball-and-socket joint",
      "Saddle joint",
    ],
    correctAnswer: "Pivot joint",
    explanation:
      "The pivot joint between the first and second vertebrae allows the head to rotate.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Pivot_joint.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the name of the fluid in joints that reduces friction?",
    options: ["Synovial fluid", "Cerebrospinal fluid", "Lymph", "Plasma"],
    correctAnswer: "Synovial fluid",
    explanation:
      "Synovial fluid lubricates joints, reducing friction and enabling smooth movement.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Synovial_fluid.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which bone is also known as the collarbone?",
    options: ["Clavicle", "Scapula", "Sternum", "Humerus"],
    correctAnswer: "Clavicle",
    explanation: "The clavicle, or collarbone, connects the arm to the body.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/1/12/Clavicle_bone.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which bone forms the lower jaw?",
    options: ["Mandible", "Maxilla", "Zygomatic", "Frontal"],
    correctAnswer: "Mandible",
    explanation:
      "The mandible is the only movable bone of the skull, forming the lower jaw.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Mandible.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the primary function of the cerebrum?",
    options: [
      "Control emotions",
      "Coordinate movement",
      "Perform higher brain functions",
      "Regulate heartbeat",
    ],
    correctAnswer: "Perform higher brain functions",
    explanation:
      "The cerebrum controls higher brain functions like thought, memory, and decision-making.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Cerebrum.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which organ regulates the body's salt and water balance?",
    options: ["Kidneys", "Liver", "Pancreas", "Lungs"],
    correctAnswer: "Kidneys",
    explanation:
      "The kidneys regulate the body's fluid levels and maintain salt balance.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Kidney_structure.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which muscle group is responsible for extending the knee?",
    options: ["Hamstrings", "Quadriceps", "Gluteus", "Gastrocnemius"],
    correctAnswer: "Quadriceps",
    explanation:
      "The quadriceps muscle group is responsible for extending the knee joint.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Quadriceps_muscles.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the largest artery in the human body?",
    options: ["Aorta", "Carotid", "Pulmonary artery", "Femoral artery"],
    correctAnswer: "Aorta",
    explanation:
      "The aorta is the largest artery, carrying oxygen-rich blood from the heart to the body.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/e/e4/Aorta_diagram.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the nervous system controls involuntary actions?",
    options: ["Somatic", "Autonomic", "Central", "Peripheral"],
    correctAnswer: "Autonomic",
    explanation:
      "The autonomic nervous system regulates involuntary actions like heartbeat and digestion.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Autonomic_nervous_system.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What structure connects the fetus to the placenta?",
    options: [
      "Umbilical cord",
      "Amniotic sac",
      "Placental membrane",
      "Yolk sac",
    ],
    correctAnswer: "Umbilical cord",
    explanation:
      "The umbilical cord connects the fetus to the placenta, providing nutrients and oxygen.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Umbilical_cord.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which hormone is released in response to stress?",
    options: ["Cortisol", "Insulin", "Adrenaline", "Melatonin"],
    correctAnswer: "Cortisol",
    explanation:
      "Cortisol, produced by the adrenal glands, is released during stress.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/68/Adrenal_gland_anatomy.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What type of blood vessel carries blood back to the heart?",
    options: ["Arteries", "Veins", "Capillaries", "Lymph vessels"],
    correctAnswer: "Veins",
    explanation:
      "Veins carry deoxygenated blood from tissues back to the heart.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Venous_system_en.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the brain controls breathing and heart rate?",
    options: ["Cerebellum", "Brainstem", "Cerebrum", "Thalamus"],
    correctAnswer: "Brainstem",
    explanation:
      "The brainstem regulates vital functions like breathing and heart rate.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/8/8b/Brainstem_structure.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the name of the bone in the upper arm?",
    options: ["Humerus", "Radius", "Ulna", "Clavicle"],
    correctAnswer: "Humerus",
    explanation:
      "The humerus is the long bone in the upper arm, connecting the shoulder to the elbow.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/65/Humerus.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the brain controls body temperature and hunger?",
    options: ["Hypothalamus", "Cerebellum", "Cerebrum", "Medulla"],
    correctAnswer: "Hypothalamus",
    explanation:
      "The hypothalamus regulates body temperature, hunger, and other autonomic functions.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Hypothalamus.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which muscle helps you breathe by contracting and relaxing?",
    options: ["Diaphragm", "Pectoralis", "Deltoid", "Gluteus"],
    correctAnswer: "Diaphragm",
    explanation:
      "The diaphragm contracts during inhalation and relaxes during exhalation, assisting in breathing.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Gray1122.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which type of blood cells help in clotting?",
    options: [
      "Platelets",
      "Red blood cells",
      "White blood cells",
      "Plasma cells",
    ],
    correctAnswer: "Platelets",
    explanation:
      "Platelets are small blood components that form clots to stop bleeding.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Platelets.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which gland is known as the 'master gland'?",
    options: [
      "Pituitary gland",
      "Thyroid gland",
      "Adrenal gland",
      "Pineal gland",
    ],
    correctAnswer: "Pituitary gland",
    explanation:
      "The pituitary gland controls various hormones and influences other glands in the body.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/Pituitary_gland.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What part of the brain controls coordination and balance?",
    options: ["Cerebellum", "Cerebrum", "Medulla", "Thalamus"],
    correctAnswer: "Cerebellum",
    explanation:
      "The cerebellum is responsible for motor control, coordination, and balance.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Cerebellum.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the main function of the respiratory system?",
    options: [
      "Exchange gases",
      "Circulate blood",
      "Filter toxins",
      "Produce enzymes",
    ],
    correctAnswer: "Exchange gases",
    explanation:
      "The respiratory system exchanges oxygen and carbon dioxide in the lungs.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Lungs_diagram_simple.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What type of joint is found in the elbow?",
    options: [
      "Hinge joint",
      "Pivot joint",
      "Saddle joint",
      "Ball-and-socket joint",
    ],
    correctAnswer: "Hinge joint",
    explanation: "The elbow is a hinge joint, allowing movement in one plane.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Hinge_joint.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which organ produces bile?",
    options: ["Liver", "Gallbladder", "Pancreas", "Stomach"],
    correctAnswer: "Liver",
    explanation: "The liver produces bile, which helps digest fats.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Human_liver.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the blood fights infections?",
    options: ["White blood cells", "Red blood cells", "Platelets", "Plasma"],
    correctAnswer: "White blood cells",
    explanation:
      "White blood cells protect the body by fighting infections and foreign invaders.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/White_blood_cell.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the strongest muscle in the human body by weight?",
    options: ["Masseter", "Gluteus Maximus", "Biceps", "Heart"],
    correctAnswer: "Masseter",
    explanation:
      "The masseter, or jaw muscle, is the strongest muscle by weight.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Masseter_muscle.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the body has the most bones?",
    options: ["Hand", "Foot", "Spine", "Skull"],
    correctAnswer: "Hand",
    explanation:
      "The hand contains 27 bones, more than any other part of the body.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/8/8b/Human_hand_bones.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which organ is known as the body’s 'detox center'?",
    options: ["Liver", "Kidneys", "Lungs", "Stomach"],
    correctAnswer: "Liver",
    explanation:
      "The liver detoxifies chemicals and processes nutrients from food.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Human_liver.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the smallest organ in the human body?",
    options: ["Pineal gland", "Thyroid gland", "Pancreas", "Hypothalamus"],
    correctAnswer: "Pineal gland",
    explanation:
      "The pineal gland is the smallest organ, responsible for producing melatonin.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/Pineal_gland.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which type of blood vessels carry oxygenated blood?",
    options: ["Arteries", "Veins", "Capillaries", "Lymph vessels"],
    correctAnswer: "Arteries",
    explanation: "Arteries carry oxygenated blood away from the heart.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Arterial_system_en.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which human organ can regenerate itself?",
    options: ["Liver", "Heart", "Lungs", "Pancreas"],
    correctAnswer: "Liver",
    explanation:
      "The liver is the only organ in the human body capable of regenerating itself.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Human_liver.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the body produces red blood cells?",
    options: ["Bone marrow", "Liver", "Spleen", "Lymph nodes"],
    correctAnswer: "Bone marrow",
    explanation:
      "Red blood cells are produced in the bone marrow inside bones.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Bone_marrow.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question:
      "Which organ is responsible for producing digestive enzymes and insulin?",
    options: ["Pancreas", "Liver", "Stomach", "Gallbladder"],
    correctAnswer: "Pancreas",
    explanation:
      "The pancreas produces digestive enzymes and insulin, a hormone that regulates blood sugar.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Pancreas.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the hardest substance in the human body?",
    options: ["Bone", "Tooth enamel", "Cartilage", "Keratin"],
    correctAnswer: "Tooth enamel",
    explanation:
      "Tooth enamel is the hardest substance in the human body, protecting teeth from decay.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/Human_tooth.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the largest muscle in the human body?",
    options: [
      "Gluteus Maximus",
      "Quadriceps",
      "Latissimus Dorsi",
      "Pectoralis Major",
    ],
    correctAnswer: "Gluteus Maximus",
    explanation:
      "The gluteus maximus, located in the buttocks, is the largest muscle in the body.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Gluteus_maximus.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which is the largest internal organ in the human body?",
    options: ["Liver", "Lungs", "Stomach", "Intestines"],
    correctAnswer: "Liver",
    explanation:
      "The liver is the largest internal organ, essential for detoxification and digestion.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Human_liver.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which organ is responsible for regulating blood sugar levels?",
    options: ["Pancreas", "Liver", "Kidneys", "Spleen"],
    correctAnswer: "Pancreas",
    explanation:
      "The pancreas produces insulin, which helps regulate blood sugar levels.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Pancreas.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the basic functional unit of the nervous system?",
    options: ["Neuron", "Axon", "Dendrite", "Synapse"],
    correctAnswer: "Neuron",
    explanation:
      "Neurons are the basic units of the nervous system, transmitting electrical signals.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Neuron_Hand-tuned.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which organ stores bile produced by the liver?",
    options: ["Gallbladder", "Pancreas", "Stomach", "Small intestine"],
    correctAnswer: "Gallbladder",
    explanation:
      "The gallbladder stores bile until it is needed for digestion.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Gallbladder_structure.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which hormone triggers the fight-or-flight response?",
    options: ["Adrenaline", "Cortisol", "Insulin", "Melatonin"],
    correctAnswer: "Adrenaline",
    explanation:
      "Adrenaline, released by the adrenal glands, prepares the body for fight-or-flight situations.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/68/Adrenal_gland_anatomy.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the function of the small intestine?",
    options: [
      "Absorb nutrients",
      "Produce bile",
      "Store energy",
      "Filter blood",
    ],
    correctAnswer: "Absorb nutrients",
    explanation:
      "The small intestine absorbs nutrients from digested food into the bloodstream.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Intestinal_villi.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the smallest bone in the human body?",
    options: ["Stapes", "Malleus", "Incus", "Hyoid"],
    correctAnswer: "Stapes",
    explanation:
      "The stapes, located in the ear, is the smallest bone in the human body.",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/2/26/Stapes.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which muscle is known as the calf muscle?",
    options: ["Gastrocnemius", "Quadriceps", "Biceps", "Deltoid"],
    correctAnswer: "Gastrocnemius",
    explanation:
      "The gastrocnemius muscle is located in the calf and helps with walking and running.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Gastrocnemius.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which gland produces tears?",
    options: [
      "Lacrimal gland",
      "Pituitary gland",
      "Thyroid gland",
      "Adrenal gland",
    ],
    correctAnswer: "Lacrimal gland",
    explanation:
      "The lacrimal gland, located above the eye, produces tears to lubricate and protect the eye.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Lacrimal_gland.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which bone protects the brain?",
    options: ["Skull", "Rib cage", "Vertebrae", "Clavicle"],
    correctAnswer: "Skull",
    explanation:
      "The skull protects the brain and supports the structure of the head.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/Skull_and_brain.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the brain controls speech production?",
    options: ["Broca's area", "Wernicke's area", "Cerebellum", "Brainstem"],
    correctAnswer: "Broca's area",
    explanation:
      "Broca's area, located in the frontal lobe, is responsible for speech production.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Brain_broca_wernicke.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which structure in the body helps filter lymph?",
    options: ["Lymph nodes", "Spleen", "Liver", "Kidneys"],
    correctAnswer: "Lymph nodes",
    explanation:
      "Lymph nodes filter lymph fluid and play a role in the immune system.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Lymph_nodes.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the eye is responsible for focusing light?",
    options: ["Lens", "Iris", "Pupil", "Cornea"],
    correctAnswer: "Lens",
    explanation: "The lens focuses light onto the retina to form clear images.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/2/22/Eye_anatomy.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which organ is responsible for filtering waste from the blood?",
    options: ["Kidneys", "Liver", "Lungs", "Pancreas"],
    correctAnswer: "Kidneys",
    explanation:
      "The kidneys filter waste from the blood and excrete it as urine.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Kidney_structure.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which bone is commonly known as the kneecap?",
    options: ["Patella", "Femur", "Tibia", "Fibula"],
    correctAnswer: "Patella",
    explanation: "The patella, or kneecap, protects the knee joint.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Knee_joint_anatomy.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which structure connects muscles to bones?",
    options: ["Tendons", "Ligaments", "Cartilage", "Fascia"],
    correctAnswer: "Tendons",
    explanation: "Tendons connect muscles to bones, enabling movement.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Tendon_structure.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which structure regulates the sleep-wake cycle?",
    options: [
      "Pineal gland",
      "Thyroid gland",
      "Adrenal gland",
      "Pituitary gland",
    ],
    correctAnswer: "Pineal gland",
    explanation:
      "The pineal gland produces melatonin, regulating the sleep-wake cycle.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/Pineal_gland.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which joint allows rotation of the forearm?",
    options: [
      "Pivot joint",
      "Hinge joint",
      "Ball-and-socket joint",
      "Gliding joint",
    ],
    correctAnswer: "Pivot joint",
    explanation:
      "The pivot joint between the radius and ulna allows forearm rotation.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Pivot_joint.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the body contains the most sweat glands?",
    options: ["Palms", "Forehead", "Armpits", "Feet"],
    correctAnswer: "Palms",
    explanation:
      "The palms contain the highest density of sweat glands in the human body.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Sweat_glands.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which organ pumps blood throughout the body?",
    options: ["Heart", "Liver", "Lungs", "Kidneys"],
    correctAnswer: "Heart",
    explanation:
      "The heart pumps blood, supplying oxygen and nutrients to tissues.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Heart_anatomy_tight.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which muscle group allows you to bend your elbow?",
    options: ["Biceps", "Triceps", "Deltoids", "Pectorals"],
    correctAnswer: "Biceps",
    explanation: "The biceps muscle contracts to bend the elbow.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Biceps_brachii.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the main function of the red blood cells?",
    options: [
      "Transport oxygen",
      "Fight infections",
      "Clot blood",
      "Store nutrients",
    ],
    correctAnswer: "Transport oxygen",
    explanation:
      "Red blood cells carry oxygen from the lungs to the rest of the body.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Red_blood_cells.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which bone forms the forehead?",
    options: [
      "Frontal bone",
      "Temporal bone",
      "Parietal bone",
      "Occipital bone",
    ],
    correctAnswer: "Frontal bone",
    explanation:
      "The frontal bone forms the forehead and the upper part of the eye sockets.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/63/Frontal_bone.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the role of the white blood cells?",
    options: [
      "Fight infections",
      "Transport oxygen",
      "Regulate sugar",
      "Clot blood",
    ],
    correctAnswer: "Fight infections",
    explanation: "White blood cells help protect the body from infections.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/White_blood_cell.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What type of joint is the hip joint?",
    options: ["Ball-and-socket", "Hinge", "Pivot", "Gliding"],
    correctAnswer: "Ball-and-socket",
    explanation:
      "The hip joint is a ball-and-socket joint, allowing a wide range of motion.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Shoulder_joint.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which structure controls reflex actions?",
    options: ["Spinal cord", "Brainstem", "Cerebellum", "Cerebrum"],
    correctAnswer: "Spinal cord",
    explanation:
      "The spinal cord controls reflex actions without involving the brain.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Spinal_cord.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which organ produces the hormone insulin?",
    options: ["Pancreas", "Liver", "Kidneys", "Spleen"],
    correctAnswer: "Pancreas",
    explanation: "The pancreas produces insulin, which regulates blood sugar.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Pancreas.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which structure gives hair its color?",
    options: ["Melanin", "Keratin", "Collagen", "Hemoglobin"],
    correctAnswer: "Melanin",
    explanation: "Melanin is the pigment that gives hair and skin their color.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Melanin.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question:
      "What is the name of the tube that connects the throat to the stomach?",
    options: ["Esophagus", "Trachea", "Larynx", "Bronchus"],
    correctAnswer: "Esophagus",
    explanation:
      "The esophagus carries food and liquids from the throat to the stomach.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Esophagus_diagram.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which human sense is the most closely linked to memory?",
    options: ["Smell", "Sight", "Hearing", "Touch"],
    correctAnswer: "Smell",
    explanation:
      "The sense of smell is strongly linked to memory because it is processed by the limbic system.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/Olfactory_system.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What percentage of the human brain is water?",
    options: ["60%", "70%", "75%", "80%"],
    correctAnswer: "75%",
    explanation: "The human brain is made up of approximately 75% water.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/Brain_anatomy.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which organ has the ability to regenerate itself?",
    options: ["Liver", "Heart", "Pancreas", "Kidneys"],
    correctAnswer: "Liver",
    explanation:
      "The liver can regenerate itself, even if a portion of it is removed.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Human_liver.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the only muscle in the human body that never rests?",
    options: ["Heart", "Diaphragm", "Tongue", "Masseter"],
    correctAnswer: "Heart",
    explanation:
      "The heart continuously beats to pump blood throughout the body.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Heart_anatomy_tight.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the body has no blood supply?",
    options: ["Cornea", "Teeth", "Hair", "Nails"],
    correctAnswer: "Cornea",
    explanation:
      "The cornea is the only part of the body without a blood supply; it receives oxygen directly from the air.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/2/2e/Cornea_diagram.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What part of the human body produces the most heat?",
    options: ["Muscles", "Liver", "Heart", "Brain"],
    correctAnswer: "Liver",
    explanation:
      "The liver produces the most heat in the body due to metabolic processes.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Human_liver.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "How fast can nerve impulses travel in the human body?",
    options: ["10 mph", "60 mph", "120 mph", "300 mph"],
    correctAnswer: "120 mph",
    explanation: "Nerve impulses can travel up to 120 miles per hour.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/8/86/Nerve_structure.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the heaviest organ in the human body?",
    options: ["Liver", "Lungs", "Brain", "Heart"],
    correctAnswer: "Liver",
    explanation:
      "The liver is the heaviest internal organ, weighing about 1.5 kg.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Human_liver.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which organ holds the most blood in the body?",
    options: ["Liver", "Spleen", "Lungs", "Heart"],
    correctAnswer: "Liver",
    explanation:
      "The liver holds about 10% of the body’s blood at any given time.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Human_liver.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which sense develops first in the womb?",
    options: ["Touch", "Hearing", "Sight", "Taste"],
    correctAnswer: "Touch",
    explanation:
      "The sense of touch develops first in the womb, as early as 8 weeks.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/8/8f/Baby_touch.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the function of the spleen?",
    options: [
      "Filter blood",
      "Store bile",
      "Produce insulin",
      "Control heart rate",
    ],
    correctAnswer: "Filter blood",
    explanation:
      "The spleen filters and recycles red blood cells and plays a role in the immune response.",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/3/39/Spleen.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What percentage of the human body is water?",
    options: ["50%", "60%", "70%", "80%"],
    correctAnswer: "60%",
    explanation: "The human body is made up of approximately 60% water.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/Water_glass.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the brain processes visual information?",
    options: [
      "Occipital lobe",
      "Frontal lobe",
      "Parietal lobe",
      "Temporal lobe",
    ],
    correctAnswer: "Occipital lobe",
    explanation:
      "The occipital lobe at the back of the brain is responsible for visual processing.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Brain_lobes.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the longest nerve in the human body?",
    options: ["Sciatic nerve", "Vagus nerve", "Ulnar nerve", "Optic nerve"],
    correctAnswer: "Sciatic nerve",
    explanation: "The sciatic nerve runs from the lower back down to the legs.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Sciatic_nerve.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question:
      "Which organ is part of both the digestive and endocrine systems?",
    options: ["Pancreas", "Liver", "Kidney", "Gallbladder"],
    correctAnswer: "Pancreas",
    explanation:
      "The pancreas produces digestive enzymes and insulin, playing roles in digestion and blood sugar regulation.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Pancreas.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the smallest muscle in the human body?",
    options: ["Stapedius", "Soleus", "Masseter", "Temporalis"],
    correctAnswer: "Stapedius",
    explanation:
      "The stapedius muscle, located in the ear, is the smallest muscle in the human body.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Stapedius_muscle.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What structure connects the two hemispheres of the brain?",
    options: ["Corpus callosum", "Thalamus", "Hypothalamus", "Cerebellum"],
    correctAnswer: "Corpus callosum",
    explanation:
      "The corpus callosum connects the two hemispheres and allows communication between them.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Corpus_callosum.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the average lifespan of a red blood cell?",
    options: ["60 days", "90 days", "120 days", "150 days"],
    correctAnswer: "120 days",
    explanation: "Red blood cells have an average lifespan of 120 days.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Red_blood_cells.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question:
      "Which part of the body contains the largest number of sensory neurons?",
    options: ["Fingertips", "Lips", "Tongue", "Eyes"],
    correctAnswer: "Fingertips",
    explanation:
      "The fingertips have the highest concentration of sensory neurons, making them very sensitive.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Fingerprints_closeup.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the primary component of human hair?",
    options: ["Keratin", "Collagen", "Melanin", "Elastin"],
    correctAnswer: "Keratin",
    explanation:
      "Keratin is the protein that forms the structure of human hair.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Human_hair_under_microscope.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which blood type is known as the universal recipient?",
    options: ["A", "B", "O", "AB"],
    correctAnswer: "AB",
    explanation:
      "People with AB blood type can receive blood from any other type, making it the universal recipient.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Blood_types_diagram.svg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What part of the human body keeps growing throughout life?",
    options: ["Nose", "Ears", "Eyes", "Teeth"],
    correctAnswer: "Ears",
    explanation:
      "The nose and ears continue to grow throughout a person's life due to cartilage growth.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/Ear_structure.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which organ controls hormone production in the body?",
    options: ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Pancreas"],
    correctAnswer: "Pituitary gland",
    explanation:
      "The pituitary gland is known as the 'master gland' because it regulates other glands.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/Pituitary_gland.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which part of the brain controls voluntary movements?",
    options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
    correctAnswer: "Cerebrum",
    explanation: "The cerebrum is responsible for voluntary muscle movements.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Cerebrum.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the smallest organ in the human body?",
    options: ["Pineal gland", "Thyroid gland", "Pancreas", "Adrenal gland"],
    correctAnswer: "Pineal gland",
    explanation:
      "The pineal gland, located in the brain, is the smallest organ.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/Pineal_gland.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "What is the only jointless bone in the human body?",
    options: ["Hyoid", "Clavicle", "Sternum", "Scapula"],
    correctAnswer: "Hyoid",
    explanation:
      "The hyoid bone, located in the throat, is not connected to any other bone.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Hyoid_bone.png",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which cells are responsible for transporting oxygen?",
    options: ["Red blood cells", "White blood cells", "Platelets", "Neurons"],
    correctAnswer: "Red blood cells",
    explanation:
      "Red blood cells contain hemoglobin, which binds oxygen and carries it throughout the body.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Red_blood_cells.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
  {
    question: "Which bone protects the heart and lungs?",
    options: ["Rib cage", "Clavicle", "Sternum", "Vertebrae"],
    correctAnswer: "Rib cage",
    explanation: "The rib cage surrounds and protects the heart and lungs.",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/5/5b/Rib_cage.jpg",
    questionAudio: "https://www.soundjay.com/button/beep-07.wav",
    optionsAudio: "https://www.soundjay.com/button/beep-07.wav",
    answerAudio: "https://www.soundjay.com/button/beep-07.wav",
    explanationAudio: "https://www.soundjay.com/button/beep-07.wav",
  },
];

export default human_anatomy;

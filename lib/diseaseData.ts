export const diseaseData = {

    healthy: {
    
    name: "Healthy Brain",
    
    overview:
    "Balanced neural network communication supports stable cognition, emotional regulation, and adaptive stress response.",
    
    showRegions:false,
    
    stages:[
    
    {
    label:"Baseline Stability",
    
    description:
    "Efficient coordination between cortical and subcortical systems maintains stable cognitive and emotional processing.",
    
    symptoms:[
    "Stable mood",
    "Consistent focus",
    "Healthy sleep cycle",
    "Adaptive stress response",
    "Stable motivation"
    ],
    
    regions:[],
    
    focus:
    "Integrated neural signaling supports balanced executive and emotional function.",
    
    intensity:5
    },
    
    {
    label:"Adaptive Variability",
    
    description:
    "Normal fluctuations occur without disruption to functional stability.",
    
    symptoms:[
    "Normal emotional variation",
    "Situational stress",
    "Temporary fatigue",
    "Stable productivity",
    "Flexible thinking"
    ],
    
    regions:[],
    
    focus:
    "Healthy variability reflects dynamic neural adaptability.",
    
    intensity:7
    },
    
    {
    label:"Resilient Regulation",
    
    description:
    "Stress-response networks activate and return efficiently to baseline.",
    
    symptoms:[
    "Efficient recovery from stress",
    "Stable cognitive clarity",
    "Emotional flexibility",
    "Balanced energy",
    "Consistent performance"
    ],
    
    regions:[],
    
    focus:
    "Resilient network dynamics maintain functional balance.",
    
    intensity:9
    },
    
    {
    label:"Optimized Integration",
    
    description:
    "Large-scale neural networks coordinate efficiently across cognitive domains.",
    
    symptoms:[
    "Strong working memory",
    "Clear reasoning",
    "Stable emotional processing",
    "Consistent attention",
    "Healthy motivation"
    ],
    
    regions:[],
    
    focus:
    "Integrated connectivity supports adaptive cognition.",
    
    intensity:12
    }
    
    ]
    
    },
    
    mdd:{
    
    name:"Major Depressive Disorder",
    
    overview:
    "Dysregulation of limbic-prefrontal networks alters emotional processing and reward sensitivity.",
    
    showRegions:true,
    
    stages:[
    
    {
    label:"Reward Sensitivity Reduction",
    
    description:
    "Reduced responsiveness in dopaminergic reward pathways affects motivation.",
    
    symptoms:[
    "Reduced motivation",
    "Lower reward sensitivity",
    "Mild fatigue",
    "Sleep irregularities",
    "Decreased interest"
    ],
    
    regions:[
    "Nucleus Accumbens",
    "Ventromedial PFC"
    ],
    
    focus:
    "Reduced reward pathway activity alters reinforcement learning.",
    
    intensity:30
    },
    
    {
    label:"Emotional Processing Bias",
    
    description:
    "Hyperactivity in emotional salience regions increases negative interpretation bias.",
    
    symptoms:[
    "Increased rumination",
    "Heightened emotional sensitivity",
    "Negative bias",
    "Reduced resilience",
    "Mood instability"
    ],
    
    regions:[
    "Amygdala",
    "Subgenual ACC"
    ],
    
    focus:
    "Salience processing prioritizes negative stimuli.",
    
    intensity:50
    },
    
    {
    label:"Cognitive Control Impairment",
    
    description:
    "Executive networks show reduced regulatory efficiency.",
    
    symptoms:[
    "Low concentration",
    "Decision difficulty",
    "Mental fatigue",
    "Reduced productivity",
    "Working memory decline"
    ],
    
    regions:[
    "Dorsolateral PFC",
    "Hippocampus"
    ],
    
    focus:
    "Reduced executive regulation alters emotional control.",
    
    intensity:70
    },
    
    {
    label:"Network Rigidity",
    
    description:
    "Large-scale brain networks show reduced adaptive flexibility.",
    
    symptoms:[
    "Persistent low mood",
    "Chronic fatigue",
    "Cognitive slowing",
    "Reduced motivation",
    "Sustained stress response"
    ],
    
    regions:[
    "Default Mode Network",
    "Hippocampus"
    ],
    
    focus:
    "Rigid network dynamics maintain maladaptive thought patterns.",
    
    intensity:90
    }
    
    ]
    
    },
    
    schizophrenia:{
    
    name:"Schizophrenia",
    
    overview:
    "Disrupted integration between sensory, salience, and executive networks affects perception and cognitive organization.",
    
    showRegions:true,
    
    stages:[
    
    {
    label:"Salience Filtering Disruption",
    
    description:
    "Abnormal salience attribution alters interpretation of sensory input.",
    
    symptoms:[
    "Unusual perception patterns",
    "Attention disruption",
    "Reduced filtering of stimuli",
    "Cognitive distraction",
    "Subtle sensory distortion"
    ],
    
    regions:[
    "Thalamus",
    "Anterior Insula"
    ],
    
    focus:
    "Salience network instability alters stimulus prioritization.",
    
    intensity:35
    },
    
    {
    label:"Sensory Integration Alteration",
    
    description:
    "Temporal cortex dysfunction alters interpretation of auditory and language signals.",
    
    symptoms:[
    "Auditory misperception",
    "Language processing difficulty",
    "Cognitive disorganization",
    "Reduced clarity",
    "Confusion"
    ],
    
    regions:[
    "Superior Temporal Gyrus",
    "Wernicke Area"
    ],
    
    focus:
    "Temporal lobe dysregulation affects sensory integration.",
    
    intensity:55
    },
    
    {
    label:"Executive Coordination Breakdown",
    
    description:
    "Prefrontal integration becomes less stable across working memory systems.",
    
    symptoms:[
    "Thought fragmentation",
    "Working memory difficulty",
    "Reduced planning ability",
    "Disorganized reasoning",
    "Reduced task coordination"
    ],
    
    regions:[
    "Dorsolateral PFC",
    "Parietal Cortex"
    ],
    
    focus:
    "Executive coordination becomes inconsistent.",
    
    intensity:75
    },
    
    {
    label:"Global Network Disorganization",
    
    description:
    "Distributed neural networks fail to coordinate efficiently.",
    
    symptoms:[
    "Severe cognitive disorganization",
    "Reduced executive function",
    "Social withdrawal",
    "Disrupted reasoning",
    "Reduced cognitive integration"
    ],
    
    regions:[
    "Default Mode Network",
    "Salience Network"
    ],
    
    focus:
    "Large-scale connectivity becomes unstable.",
    
    intensity:95
    }
    
    ]
    
    },
    
    parkinsons:{
    
    name:"Parkinson's Disease",
    
    overview:
    "Degeneration of dopaminergic neurons disrupts basal ganglia motor coordination systems.",
    
    showRegions:true,
    
    stages:[
    
    {
    label:"Dopaminergic Reduction",
    
    description:
    "Loss of dopamine-producing neurons alters motor signaling precision.",
    
    symptoms:[
    "Mild tremor",
    "Minor stiffness",
    "Reduced coordination",
    "Subtle motor slowing",
    "Fatigue"
    ],
    
    regions:[
    "Substantia Nigra",
    "Putamen"
    ],
    
    focus:
    "Dopamine reduction alters basal ganglia signaling.",
    
    intensity:35
    },
    
    {
    label:"Motor Circuit Imbalance",
    
    description:
    "Basal ganglia-thalamic circuits lose efficiency.",
    
    symptoms:[
    "Movement stiffness",
    "Slower reaction time",
    "Fine motor difficulty",
    "Reduced fluidity",
    "Mild balance issues"
    ],
    
    regions:[
    "Globus Pallidus",
    "Thalamus"
    ],
    
    focus:
    "Motor loop communication weakens.",
    
    intensity:55
    },
    
    {
    label:"Coordination Instability",
    
    description:
    "Cerebellar compensation becomes less effective.",
    
    symptoms:[
    "Balance difficulty",
    "Postural instability",
    "Motor fatigue",
    "Reduced coordination",
    "Movement variability"
    ],
    
    regions:[
    "Cerebellum",
    "Motor Cortex"
    ],
    
    focus:
    "Coordination systems lose stability.",
    
    intensity:75
    },
    
    {
    label:"Advanced Motor Impairment",
    
    description:
    "Motor network communication significantly impaired.",
    
    symptoms:[
    "Severe tremor",
    "Major rigidity",
    "Movement difficulty",
    "Reduced dexterity",
    "Motor fatigue"
    ],
    
    regions:[
    "Motor Cortex",
    "Basal Ganglia"
    ],
    
    focus:
    "Motor system communication significantly reduced.",
    
    intensity:95
    }
    
    ]
    
    }
    
    };
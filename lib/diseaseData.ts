export type Stage = {

    title: string
    
    neural: string[]
    
    functional: string[]
    
    regions: string[]
    
    }
    
    export type Disease = {
    
    id: string
    
    label: string
    
    stages: Stage[]
    
    }
    
    export const diseaseData: Record<string, Disease> = {
    
    
    /* ------------------------------ */
    /* HEALTHY */
    /* ------------------------------ */
    
    healthy: {
    
    id: "healthy",
    
    label: "Healthy Brain",
    
    stages: [
    
    {
    
    title: "Stable neural equilibrium",
    
    regions: [
    "Prefrontal cortex",
    "Anterior cingulate",
    "Hippocampus",
    "Amygdala"
    ],
    
    neural: [
    "Balanced signaling between cognitive and emotional networks",
    "Stable neurotransmitter regulation across reward pathways",
    "Efficient hippocampal contextual encoding",
    "Consistent anterior cingulate engagement in conflict monitoring",
    "Healthy large-scale neural network synchrony"
    ],
    
    functional: [
    "Stable mood regulation",
    "Consistent motivation",
    "Reliable focus control",
    "Healthy stress recovery",
    "Adaptive emotional flexibility"
    ]
    
    },
    
    {
    
    title: "Adaptive cognitive variation",
    
    regions: [
    "Prefrontal cortex",
    "Hippocampus"
    ],
    
    neural: [
    "Minor neurotransmitter variation remains within healthy range",
    "Flexible prefrontal modulation of emotional responses",
    "Stable memory encoding dynamics",
    "Adaptive neural plasticity",
    "Preserved network communication efficiency"
    ],
    
    functional: [
    "Normal variation in attention levels",
    "Healthy response to daily stress",
    "Stable working memory",
    "Effective decision-making",
    "Consistent behavioral regulation"
    ]
    
    },
    
    {
    
    title: "Sustained resilience",
    
    regions: [
    "Prefrontal cortex",
    "Anterior cingulate"
    ],
    
    neural: [
    "Strong prefrontal regulation of limbic processing",
    "Efficient salience detection",
    "Stable cognitive control signaling",
    "Balanced network integration",
    "Reliable synaptic efficiency"
    ],
    
    functional: [
    "Stable emotional baseline",
    "Healthy executive functioning",
    "Reliable cognitive flexibility",
    "Consistent learning capacity",
    "Maintained attentional control"
    ]
    
    },
    
    {
    
    title: "Long-term neural stability",
    
    regions: [
    "Prefrontal cortex",
    "Hippocampus",
    "Amygdala",
    "Anterior cingulate"
    ],
    
    neural: [
    "Preserved connectivity across distributed neural networks",
    "Stable stress response modulation",
    "Balanced excitatory-inhibitory signaling",
    "Healthy hippocampal structural integrity",
    "Maintained neurotransmitter equilibrium"
    ],
    
    functional: [
    "Consistent mental clarity",
    "Stable emotional resilience",
    "Reliable energy levels",
    "Healthy behavioral consistency",
    "Stable attention regulation"
    ]
    
    }
    
    ]
    
    },
    
    
    
    /* ------------------------------ */
    /* MAJOR DEPRESSIVE DISORDER */
    /* ------------------------------ */
    
    mdd: {
    
    id: "mdd",
    
    label: "Major Depressive Disorder",
    
    stages: [
    
    {
    
    title: "Early network sensitivity",
    
    regions: [
    "Prefrontal cortex",
    "Amygdala"
    ],
    
    neural: [
    "Reduced regulatory control from prefrontal cortex",
    "Increased amygdala response to negative stimuli",
    "Subtle serotonin signaling variation",
    "Early reward circuit sensitivity change",
    "Mild limbic-prefrontal imbalance"
    ],
    
    functional: [
    "Mild emotional sensitivity",
    "Reduced motivation at times",
    "Subtle sleep variation",
    "Minor attention fluctuations",
    "Reduced reward anticipation"
    ]
    
    },
    
    {
    
    title: "Developing dysregulation",
    
    regions: [
    "Prefrontal cortex",
    "Amygdala",
    "Anterior cingulate"
    ],
    
    neural: [
    "Weakened cognitive-emotional coordination",
    "Reduced anterior cingulate regulation efficiency",
    "Increased stress response activation",
    "Reduced reward network sensitivity",
    "Altered salience processing"
    ],
    
    functional: [
    "Persistent low mood periods",
    "Increased cognitive fatigue",
    "Reduced concentration consistency",
    "Lower motivation stability",
    "Increased emotional variability"
    ]
    
    },
    
    {
    
    title: "Functional disruption",
    
    regions: [
    "Prefrontal cortex",
    "Hippocampus",
    "Anterior cingulate"
    ],
    
    neural: [
    "Reduced top-down regulatory signaling",
    "Lower hippocampal neuroplasticity",
    "Persistent stress pathway activation",
    "Reduced network efficiency",
    "Increased cognitive load"
    ],
    
    functional: [
    "Difficulty sustaining effort",
    "Reduced energy levels",
    "Lower cognitive endurance",
    "Increased decision fatigue",
    "Reduced emotional resilience"
    ]
    
    },
    
    {
    
    title: "Chronic dysregulation",
    
    regions: [
    "Prefrontal cortex",
    "Amygdala",
    "Hippocampus",
    "Anterior cingulate"
    ],
    
    neural: [
    "Persistent disruption of mood-regulation circuitry",
    "Reduced dopaminergic reward sensitivity",
    "Chronic stress-response activation",
    "Reduced hippocampal efficiency",
    "Broad functional dysconnectivity"
    ],
    
    functional: [
    "Persistent emotional distress",
    "Reduced daily functioning consistency",
    "Low motivation levels",
    "Chronic fatigue",
    "Reduced cognitive clarity"
    ]
    
    }
    
    ]
    
    },
    
    
    
    /* ------------------------------ */
    /* SCHIZOPHRENIA */
    /* ------------------------------ */
    
    schizophrenia: {
    
    id: "schizophrenia",
    
    label: "Schizophrenia",
    
    stages: [
    
    {
    
    title: "Prodromal variation",
    
    regions: [
    "Prefrontal cortex",
    "Hippocampus"
    ],
    
    neural: [
    "Subtle glutamatergic signaling disruption",
    "Reduced hippocampal contextual processing accuracy",
    "Early dopamine pathway variability",
    "Reduced executive coordination",
    "Increased neural signal noise"
    ],
    
    functional: [
    "Mild concentration variability",
    "Subtle perceptual sensitivity",
    "Lower working memory consistency",
    "Reduced attentional stability",
    "Early cognitive inefficiency"
    ]
    
    },
    
    {
    
    title: "Emerging dysconnectivity",
    
    regions: [
    "Prefrontal cortex",
    "Anterior cingulate",
    "Hippocampus"
    ],
    
    neural: [
    "Reduced synchrony between cortical regions",
    "Altered salience attribution signaling",
    "Reduced anterior cingulate monitoring accuracy",
    "Impaired hippocampal-prefrontal communication",
    "Increased dopamine variability"
    ],
    
    functional: [
    "Increased distractibility",
    "Reduced working memory stability",
    "Difficulty maintaining cognitive organization",
    "Reduced processing consistency",
    "Increased cognitive effort requirement"
    ]
    
    },
    
    {
    
    title: "Network fragmentation",
    
    regions: [
    "Prefrontal cortex",
    "Amygdala",
    "Anterior cingulate"
    ],
    
    neural: [
    "Reduced top-down cognitive regulation",
    "Increased salience misinterpretation",
    "Altered limbic modulation patterns",
    "Reduced neural coordination",
    "Increased network fragmentation"
    ],
    
    functional: [
    "Disorganized thinking patterns",
    "Inconsistent emotional responses",
    "Reduced attentional stability",
    "Difficulty maintaining structured reasoning",
    "Increased cognitive variability"
    ]
    
    },
    
    {
    
    title: "Chronic dysconnectivity",
    
    regions: [
    "Prefrontal cortex",
    "Hippocampus",
    "Amygdala",
    "Anterior cingulate"
    ],
    
    neural: [
    "Persistent disruption of functional connectivity",
    "Altered dopamine pathway regulation",
    "Reduced network integration efficiency",
    "Persistent neural signal instability",
    "Reduced cortical synchrony"
    ],
    
    functional: [
    "Significant cognitive fragmentation",
    "Reduced executive control",
    "Increased perceptual inconsistency",
    "Difficulty maintaining task focus",
    "Reduced daily functioning stability"
    ]
    
    }
    
    ]
    
    },
    
    
    
    /* ------------------------------ */
    /* PARKINSON'S */
    /* ------------------------------ */
    
    parkinsons: {
    
    id: "parkinsons",
    
    label: "Parkinson's Disease",
    
    stages: [
    
    {
    
    title: "Early dopaminergic decline",
    
    regions: [
    "Prefrontal cortex"
    ],
    
    neural: [
    "Early degeneration of dopamine-producing neurons",
    "Reduced basal ganglia modulation",
    "Subtle motor circuit inefficiency",
    "Reduced dopamine availability",
    "Early synaptic signaling changes"
    ],
    
    functional: [
    "Mild motor precision variation",
    "Subtle slowing of movement initiation",
    "Slight coordination inconsistency",
    "Reduced motor fluidity",
    "Increased cognitive effort during motion"
    ]
    
    },
    
    {
    
    title: "Motor circuit disruption",
    
    regions: [
    "Prefrontal cortex",
    "Anterior cingulate"
    ],
    
    neural: [
    "Reduced dopamine transmission across motor pathways",
    "Increased basal ganglia inhibition",
    "Altered motor cortex signaling",
    "Reduced neural efficiency in movement planning",
    "Early motor network dysregulation"
    ],
    
    functional: [
    "Slowed movement speed",
    "Increased stiffness",
    "Reduced coordination smoothness",
    "Difficulty initiating voluntary motion",
    "Reduced motor consistency"
    ]
    
    },
    
    {
    
    title: "Progressive impairment",
    
    regions: [
    "Prefrontal cortex",
    "Anterior cingulate"
    ],
    
    neural: [
    "Further dopaminergic neuron degeneration",
    "Increased basal ganglia signaling disruption",
    "Reduced cortical motor coordination",
    "Increased neural compensation effort",
    "Reduced motor network integration"
    ],
    
    functional: [
    "Noticeable tremor patterns",
    "Increased muscle rigidity",
    "Reduced balance stability",
    "Slower voluntary movement",
    "Increased motor fatigue"
    ]
    
    },
    
    {
    
    title: "Advanced dysfunction",
    
    regions: [
    "Prefrontal cortex",
    "Anterior cingulate"
    ],
    
    neural: [
    "Severe dopamine depletion",
    "Reduced communication between motor planning regions",
    "Impaired motor circuit coordination",
    "Increased neural inefficiency",
    "Reduced network synchrony"
    ],
    
    functional: [
    "Significant motor impairment",
    "Difficulty maintaining posture",
    "Reduced movement initiation",
    "Increased physical fatigue",
    "Reduced coordination accuracy"
    ]
    
    }
    
    ]
    
    }
    
    }
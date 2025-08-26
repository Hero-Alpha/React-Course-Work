const menu = [
    {
        id: 1,
        label: "Dashboard",
    },
    {
        id: 2,
        label: "Projects",
        children: [
            {
                id: 3,
                label: "Active Projects",
                children: [
                    {
                        id: 4,
                        label: "Project A",
                        children: [
                            {
                                id: 5,
                                label: "Design Phase",
                                children: [],
                            },
                            {
                                id: 6,
                                label: "Development Phase",
                                children: [
                                    {
                                        id: 7,
                                        label: "Frontend Module",
                                        children: [],
                                    },
                                    {
                                        id: 8,
                                        label: "Backend Module",
                                        children: [],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 9,
                        label: "Project B",
                        children: [],
                    },
                ],
            },
            {
                id: 10,
                label: "Archived Projects",
                children: [],
            },
        ],
    },
    {
        id: 11,
        label: "Teams",
        children: [
            {
                id: 12,
                label: "Engineering",
                children: [
                    {
                        id: 13,
                        label: "Frontend",
                        children: [],
                    },
                    {
                        id: 14,
                        label: "Backend",
                        children: [
                            {
                                id: 15,
                                label: "API Team",
                                children: [],
                            },
                            {
                                id: 16,
                                label: "Database Team",
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: 17,
                label: "Design",
                children: [],
            },
        ],
    },
    {
        id: 18,
        label: "Settings",
        children: [
            {
                id: 19,
                label: "Profile Settings",
                children: [],
            },
            {
                id: 20,
                label: "Security"
            },
        ],
    },
];

export default menu;
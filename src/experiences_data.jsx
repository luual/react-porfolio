const Experiences = [
    {
        Start: "2017-12-31T23:00:00.000Z",
        End: "2018-12-31T23:00:00.000Z",
        Company: 'MyCompany',
        Description: "My Description",
        Projects: [
            {
                Title: 'Project1',
                Description: 'My Project',
                Languages: 'C++',
                Tools: 'Visual Studio',
            },
        ]
    },

    {
        Start: "2018-12-31T23:00:00.000Z",
        End: "2019-12-31T23:00:00.000Z",
        Company: 'MyCompany2',
        Description: "My Description2",
        Projects: [
            {
                Title: 'Project1',
                Description: 'My Project',
                Languages: 'Python',
                Tools: 'IntelliJ',
            },
        ]
    },
]

export function GetExperiences() { 
    return Experiences;
}
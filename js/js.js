anime({
    targets: '#stroke-linije3',


    strokeDashoffset: [{
            value: [anime.setDashoffset,
                0
            ],
            duration: 2500,
            // delay: 500
        },

    ],



    easing: 'easeInOutSine',





    direction: "alternate",
    loop: true,






});

anime({

    targets: '#stroke-linije2',


    strokeDashoffset: [{
            value: [anime.setDashoffset,
                0
            ],
            duration: 2500,
            delay: 5000
        },



    ],




    easing: 'easeInOutSine',





    direction: "alternate",
    loop: true,





});

anime({

    targets: '#stroke-sredina2',


    strokeDashoffset: [{
            value: [anime.setDashoffset,
                0
            ],
            duration: 2500,
            delay: 5000
        },



    ],




    easing: 'easeInOutSine',





    direction: "alternate",
    loop: true,





});


anime({
    targets: '#v',
    d: [{
            value: 'M62.4141 169.392L60 150.392H62.625L63.8438 160.438L64.2422 167.112H64.7578L65.1563 160.438L66.375 150.392H69L66.6094 169.392H62.4141Z',


        },
        {
            value: 'M62.4141 169L60 160H62.625L63.8438 164.759L64.2422 167.92H64.7578L65.1563 164.759L66.375 160H69L66.6094 169H62.4141Z'

        },
        {
            value: 'M62.4141 169.392L60 150.392H62.625L63.8438 160.438L64.2422 167.112H64.7578L65.1563 160.438L66.375 150.392H69L66.6094 169.392H62.4141Z',


        }

    ],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 500,


});


anime({
    targets: '#s',
    d: [{
            value: 'M74.0174 169C72.6241 169 71.6333 168.705 71.045 168.115C70.4567 167.51 70.1316 166.516 70.0697 165.135C70.0542 164.592 70.0464 164.064 70.0464 163.551C70.0619 163.039 70.0929 162.504 70.1393 161.945H72.508C72.477 162.581 72.4538 163.21 72.4383 163.831C72.4383 164.452 72.4615 165.034 72.508 165.577C72.5389 166.043 72.6705 166.384 72.9028 166.602C73.1505 166.819 73.522 166.928 74.0174 166.928C74.4973 166.928 74.8457 166.819 75.0624 166.602C75.2946 166.384 75.4262 166.043 75.4572 165.577C75.5036 165.049 75.5191 164.576 75.5036 164.157C75.5036 163.722 75.4881 163.218 75.4572 162.643C75.4262 162.193 75.3333 161.805 75.1785 161.479C75.0237 161.153 74.745 160.936 74.3425 160.827L72.7866 160.431C71.7339 160.167 71.014 159.71 70.627 159.058C70.24 158.406 70.031 157.521 70 156.403C70 155.984 70 155.557 70 155.123C70 154.688 70.0077 154.261 70.0232 153.842C70.0697 152.46 70.387 151.475 70.9753 150.885C71.5791 150.295 72.5931 150 74.0174 150C75.3488 150 76.3164 150.295 76.9202 150.885C77.5239 151.475 77.8491 152.46 77.8955 153.842C77.911 154.23 77.911 154.703 77.8955 155.262C77.8955 155.806 77.8878 156.357 77.8723 156.915H75.4572C75.4727 156.326 75.4804 155.743 75.4804 155.169C75.4959 154.579 75.4881 153.989 75.4572 153.4C75.4262 152.515 74.9386 152.072 73.9942 152.072C73.5143 152.072 73.1582 152.181 72.926 152.398C72.6938 152.616 72.5622 152.949 72.5312 153.4C72.4848 153.896 72.4615 154.401 72.4615 154.913C72.477 155.41 72.5002 155.906 72.5312 156.403C72.5622 156.915 72.6551 157.319 72.8099 157.614C72.9802 157.909 73.2821 158.111 73.7155 158.219L75.1089 158.545C76.208 158.809 76.9511 159.283 77.3382 159.966C77.7252 160.633 77.9419 161.526 77.9884 162.643C78.0039 163.14 78.0039 163.567 77.9884 163.924C77.9884 164.281 77.9806 164.685 77.9652 165.135C77.9187 166.516 77.5936 167.51 76.9898 168.115C76.3861 168.705 75.3953 169 74.0174 169Z',


        },
        {
            value: 'M74.0174 169C72.6241 169 71.6333 168.767 71.045 168.301C70.4567 167.824 70.1316 167.039 70.0697 165.949C70.0542 165.52 70.0464 165.103 70.0464 164.699C70.0619 164.294 70.0929 163.871 70.1393 163.43H72.508C72.477 163.933 72.4538 164.429 72.4383 164.919C72.4383 165.409 72.4615 165.869 72.508 166.298C72.5389 166.665 72.6705 166.935 72.9028 167.107C73.1505 167.278 73.522 167.364 74.0174 167.364C74.4973 167.364 74.8457 167.278 75.0624 167.107C75.2946 166.935 75.4262 166.665 75.4572 166.298C75.5036 165.881 75.5191 165.507 75.5036 165.176C75.5036 164.833 75.4881 164.435 75.4572 163.982C75.4262 163.626 75.3333 163.32 75.1785 163.062C75.0237 162.805 74.745 162.634 74.3425 162.548L72.7866 162.235C71.7339 162.027 71.014 161.665 70.627 161.151C70.24 160.636 70.031 159.937 70 159.055C70 158.724 70 158.387 70 158.044C70 157.701 70.0077 157.364 70.0232 157.033C70.0697 155.942 70.387 155.164 70.9753 154.699C71.5791 154.233 72.5931 154 74.0174 154C75.3488 154 76.3164 154.233 76.9202 154.699C77.5239 155.164 77.8491 155.942 77.8955 157.033C77.911 157.339 77.911 157.713 77.8955 158.154C77.8955 158.583 77.8878 159.018 77.8723 159.46H75.4572C75.4727 158.994 75.4804 158.534 75.4804 158.081C75.4959 157.615 75.4881 157.15 75.4572 156.684C75.4262 155.985 74.9386 155.636 73.9942 155.636C73.5143 155.636 73.1582 155.722 72.926 155.893C72.6938 156.065 72.5622 156.328 72.5312 156.684C72.4848 157.076 72.4615 157.474 72.4615 157.879C72.477 158.271 72.5002 158.663 72.5312 159.055C72.5622 159.46 72.6551 159.778 72.8099 160.011C72.9802 160.244 73.2821 160.403 73.7155 160.489L75.1089 160.746C76.208 160.955 76.9511 161.328 77.3382 161.868C77.7252 162.395 77.9419 163.099 77.9884 163.982C78.0039 164.374 78.0039 164.711 77.9884 164.993C77.9884 165.275 77.9806 165.593 77.9652 165.949C77.9187 167.039 77.5936 167.824 76.9898 168.301C76.3861 168.767 75.3953 169 74.0174 169Z'

        },
        {
            value: 'M74.0174 169C72.6241 169 71.6333 168.705 71.045 168.115C70.4567 167.51 70.1316 166.516 70.0697 165.135C70.0542 164.592 70.0464 164.064 70.0464 163.551C70.0619 163.039 70.0929 162.504 70.1393 161.945H72.508C72.477 162.581 72.4538 163.21 72.4383 163.831C72.4383 164.452 72.4615 165.034 72.508 165.577C72.5389 166.043 72.6705 166.384 72.9028 166.602C73.1505 166.819 73.522 166.928 74.0174 166.928C74.4973 166.928 74.8457 166.819 75.0624 166.602C75.2946 166.384 75.4262 166.043 75.4572 165.577C75.5036 165.049 75.5191 164.576 75.5036 164.157C75.5036 163.722 75.4881 163.218 75.4572 162.643C75.4262 162.193 75.3333 161.805 75.1785 161.479C75.0237 161.153 74.745 160.936 74.3425 160.827L72.7866 160.431C71.7339 160.167 71.014 159.71 70.627 159.058C70.24 158.406 70.031 157.521 70 156.403C70 155.984 70 155.557 70 155.123C70 154.688 70.0077 154.261 70.0232 153.842C70.0697 152.46 70.387 151.475 70.9753 150.885C71.5791 150.295 72.5931 150 74.0174 150C75.3488 150 76.3164 150.295 76.9202 150.885C77.5239 151.475 77.8491 152.46 77.8955 153.842C77.911 154.23 77.911 154.703 77.8955 155.262C77.8955 155.806 77.8878 156.357 77.8723 156.915H75.4572C75.4727 156.326 75.4804 155.743 75.4804 155.169C75.4959 154.579 75.4881 153.989 75.4572 153.4C75.4262 152.515 74.9386 152.072 73.9942 152.072C73.5143 152.072 73.1582 152.181 72.926 152.398C72.6938 152.616 72.5622 152.949 72.5312 153.4C72.4848 153.896 72.4615 154.401 72.4615 154.913C72.477 155.41 72.5002 155.906 72.5312 156.403C72.5622 156.915 72.6551 157.319 72.8099 157.614C72.9802 157.909 73.2821 158.111 73.7155 158.219L75.1089 158.545C76.208 158.809 76.9511 159.283 77.3382 159.966C77.7252 160.633 77.9419 161.526 77.9884 162.643C78.0039 163.14 78.0039 163.567 77.9884 163.924C77.9884 164.281 77.9806 164.685 77.9652 165.135C77.9187 166.516 77.5936 167.51 76.9898 168.115C76.3861 168.705 75.3953 169 74.0174 169Z',


        }

    ],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 1000,


});


anime({
    targets: '#v',
    opacity: 1,
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 500,
});

anime({
    targets: '#s',
    opacity: 1,
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 1000,
});


anime({
    targets: '#ss',
    opacity: 1,
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 1500,
});

anime({
    targets: '#t',
    opacity: 1,
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 2000,
});

anime({
    targets: '#y',
    opacity: 1,
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 2500,
});
anime({
    targets: '#l',
    opacity: 1,
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 3000,
});
anime({
    targets: '#e',
    opacity: 1,
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 3500,
});



anime({
    targets: '#ss',
    d: [{
            value: 'M89.2644 169.584C87.8244 169.584 86.8004 169.28 86.1924 168.672C85.5844 168.048 85.2484 167.024 85.1844 165.6C85.1684 165.04 85.1604 164.496 85.1604 163.968C85.1764 163.44 85.2084 162.888 85.2564 162.312H87.7044C87.6724 162.968 87.6484 163.616 87.6324 164.256C87.6324 164.896 87.6564 165.496 87.7044 166.056C87.7364 166.536 87.8724 166.888 88.1124 167.112C88.3684 167.336 88.7524 167.448 89.2644 167.448C89.7604 167.448 90.1204 167.336 90.3444 167.112C90.5844 166.888 90.7204 166.536 90.7524 166.056C90.8004 165.512 90.8164 165.024 90.8004 164.592C90.8004 164.144 90.7844 163.624 90.7524 163.032C90.7204 162.568 90.6244 162.168 90.4644 161.832C90.3044 161.496 90.0164 161.272 89.6004 161.16L87.9924 160.752C86.9044 160.48 86.1604 160.008 85.7604 159.336C85.3604 158.664 85.1444 157.752 85.1124 156.6C85.1124 156.168 85.1124 155.728 85.1124 155.28C85.1124 154.832 85.1204 154.392 85.1364 153.96C85.1844 152.536 85.5124 151.52 86.1204 150.912C86.7444 150.304 87.7924 150 89.2644 150C90.6404 150 91.6404 150.304 92.2644 150.912C92.8884 151.52 93.2244 152.536 93.2724 153.96C93.2884 154.36 93.2884 154.848 93.2724 155.424C93.2724 155.984 93.2644 156.552 93.2484 157.128H90.7524C90.7684 156.52 90.7764 155.92 90.7764 155.328C90.7924 154.72 90.7844 154.112 90.7524 153.504C90.7204 152.592 90.2164 152.136 89.2404 152.136C88.7444 152.136 88.3764 152.248 88.1364 152.472C87.8964 152.696 87.7604 153.04 87.7284 153.504C87.6804 154.016 87.6564 154.536 87.6564 155.064C87.6724 155.576 87.6964 156.088 87.7284 156.6C87.7604 157.128 87.8564 157.544 88.0164 157.848C88.1924 158.152 88.5044 158.36 88.9524 158.472L90.3924 158.808C91.5284 159.08 92.2964 159.568 92.6964 160.272C93.0964 160.96 93.3204 161.88 93.3684 163.032C93.3844 163.544 93.3844 163.984 93.3684 164.352C93.3684 164.72 93.3604 165.136 93.3444 165.6C93.2964 167.024 92.9604 168.048 92.3364 168.672C91.7124 169.28 90.6884 169.584 89.2644 169.584Z',


        },
        {
            value: 'M89.1406 171.255C87.7046 171.255 86.6834 171.08 86.077 170.731C85.4707 170.372 85.1356 169.784 85.0718 168.966C85.0558 168.644 85.0479 168.331 85.0479 168.028C85.0638 167.724 85.0957 167.407 85.1436 167.076H87.5849C87.553 167.453 87.529 167.825 87.5131 168.193C87.5131 168.561 87.537 168.906 87.5849 169.228C87.6168 169.503 87.7524 169.706 87.9918 169.834C88.2471 169.963 88.63 170.028 89.1406 170.028C89.6353 170.028 89.9943 169.963 90.2177 169.834C90.457 169.706 90.5926 169.503 90.6245 169.228C90.6724 168.915 90.6884 168.634 90.6724 168.386C90.6724 168.129 90.6564 167.83 90.6245 167.49C90.5926 167.223 90.4969 166.993 90.3373 166.8C90.1778 166.607 89.8906 166.478 89.4757 166.414L87.8721 166.179C86.7871 166.023 86.0451 165.752 85.6462 165.366C85.2473 164.979 85.0319 164.455 85 163.793C85 163.545 85 163.292 85 163.034C85 162.777 85.008 162.524 85.0239 162.276C85.0718 161.457 85.3989 160.874 86.0052 160.524C86.6275 160.175 87.6727 160 89.1406 160C90.5128 160 91.5101 160.175 92.1324 160.524C92.7547 160.874 93.0898 161.457 93.1376 162.276C93.1536 162.506 93.1536 162.786 93.1376 163.117C93.1376 163.439 93.1296 163.766 93.1137 164.097H90.6245C90.6405 163.747 90.6485 163.402 90.6485 163.062C90.6644 162.713 90.6564 162.363 90.6245 162.014C90.5926 161.49 90.09 161.228 89.1167 161.228C88.622 161.228 88.255 161.292 88.0157 161.421C87.7764 161.549 87.6407 161.747 87.6088 162.014C87.561 162.308 87.537 162.607 87.537 162.91C87.553 163.205 87.5769 163.499 87.6088 163.793C87.6407 164.097 87.7365 164.336 87.896 164.51C88.0716 164.685 88.3827 164.805 88.8295 164.869L90.2655 165.062C91.3984 165.218 92.1643 165.499 92.5632 165.903C92.9621 166.299 93.1855 166.828 93.2334 167.49C93.2493 167.784 93.2493 168.037 93.2334 168.248C93.2334 168.46 93.2254 168.699 93.2094 168.966C93.1616 169.784 92.8265 170.372 92.2042 170.731C91.5819 171.08 90.5607 171.255 89.1406 171.255Z'

        },
        {
            value: 'M89.2644 169.584C87.8244 169.584 86.8004 169.28 86.1924 168.672C85.5844 168.048 85.2484 167.024 85.1844 165.6C85.1684 165.04 85.1604 164.496 85.1604 163.968C85.1764 163.44 85.2084 162.888 85.2564 162.312H87.7044C87.6724 162.968 87.6484 163.616 87.6324 164.256C87.6324 164.896 87.6564 165.496 87.7044 166.056C87.7364 166.536 87.8724 166.888 88.1124 167.112C88.3684 167.336 88.7524 167.448 89.2644 167.448C89.7604 167.448 90.1204 167.336 90.3444 167.112C90.5844 166.888 90.7204 166.536 90.7524 166.056C90.8004 165.512 90.8164 165.024 90.8004 164.592C90.8004 164.144 90.7844 163.624 90.7524 163.032C90.7204 162.568 90.6244 162.168 90.4644 161.832C90.3044 161.496 90.0164 161.272 89.6004 161.16L87.9924 160.752C86.9044 160.48 86.1604 160.008 85.7604 159.336C85.3604 158.664 85.1444 157.752 85.1124 156.6C85.1124 156.168 85.1124 155.728 85.1124 155.28C85.1124 154.832 85.1204 154.392 85.1364 153.96C85.1844 152.536 85.5124 151.52 86.1204 150.912C86.7444 150.304 87.7924 150 89.2644 150C90.6404 150 91.6404 150.304 92.2644 150.912C92.8884 151.52 93.2244 152.536 93.2724 153.96C93.2884 154.36 93.2884 154.848 93.2724 155.424C93.2724 155.984 93.2644 156.552 93.2484 157.128H90.7524C90.7684 156.52 90.7764 155.92 90.7764 155.328C90.7924 154.72 90.7844 154.112 90.7524 153.504C90.7204 152.592 90.2164 152.136 89.2404 152.136C88.7444 152.136 88.3764 152.248 88.1364 152.472C87.8964 152.696 87.7604 153.04 87.7284 153.504C87.6804 154.016 87.6564 154.536 87.6564 155.064C87.6724 155.576 87.6964 156.088 87.7284 156.6C87.7604 157.128 87.8564 157.544 88.0164 157.848C88.1924 158.152 88.5044 158.36 88.9524 158.472L90.3924 158.808C91.5284 159.08 92.2964 159.568 92.6964 160.272C93.0964 160.96 93.3204 161.88 93.3684 163.032C93.3844 163.544 93.3844 163.984 93.3684 164.352C93.3684 164.72 93.3604 165.136 93.3444 165.6C93.2964 167.024 92.9604 168.048 92.3364 168.672C91.7124 169.28 90.6884 169.584 89.2644 169.584Z',


        }

    ],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 1500,


});


anime({
    targets: '#t',
    d: [{
            value: 'M100.373 169.584C98.8854 169.584 97.8374 169.312 97.2294 168.768C96.6214 168.208 96.3174 167.288 96.3174 166.008V156.984H95.1414V154.992H96.3414V150.912H99.0054L98.9574 154.992H101.237V156.984H98.9094V166.272C98.9094 166.784 98.9974 167.144 99.1734 167.352C99.3654 167.544 99.7654 167.64 100.373 167.64C100.581 167.64 100.765 167.632 100.925 167.616C101.085 167.6 101.269 167.592 101.477 167.592V169.464C101.317 169.512 101.141 169.544 100.949 169.56C100.757 169.576 100.565 169.584 100.373 169.584Z',


        },
        {
            value: 'M100.219 171.255C98.7352 171.255 97.6901 171.099 97.0838 170.786C96.4774 170.464 96.1743 169.936 96.1743 169.2V164.014H95.0015V162.869H96.1982V160.524H98.8549L98.807 162.869H101.081V164.014H98.7592V169.352C98.7592 169.646 98.8469 169.853 99.0224 169.972C99.2139 170.083 99.6128 170.138 100.219 170.138C100.427 170.138 100.61 170.133 100.77 170.124C100.929 170.115 101.113 170.11 101.32 170.11V171.186C101.161 171.214 100.985 171.232 100.794 171.241C100.602 171.251 100.411 171.255 100.219 171.255Z'

        },
        {
            value: 'M100.373 169.584C98.8854 169.584 97.8374 169.312 97.2294 168.768C96.6214 168.208 96.3174 167.288 96.3174 166.008V156.984H95.1414V154.992H96.3414V150.912H99.0054L98.9574 154.992H101.237V156.984H98.9094V166.272C98.9094 166.784 98.9974 167.144 99.1734 167.352C99.3654 167.544 99.7654 167.64 100.373 167.64C100.581 167.64 100.765 167.632 100.925 167.616C101.085 167.6 101.269 167.592 101.477 167.592V169.464C101.317 169.512 101.141 169.544 100.949 169.56C100.757 169.576 100.565 169.584 100.373 169.584Z',


        }

    ],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 2000,


});


anime({
    targets: '#y',
    d: [{
            value: 'M104.865 169.392L102.513 154.992H105.153L105.969 161.76L106.473 167.448H107.049L107.529 161.76L108.225 154.992H110.865L108.585 170.76C108.457 171.608 108.241 172.296 107.937 172.824C107.633 173.352 107.193 173.736 106.617 173.976C106.041 174.232 105.265 174.36 104.289 174.36C104.049 174.36 103.785 174.344 103.497 174.312C103.209 174.28 102.937 174.248 102.681 174.216V172.248C102.889 172.28 103.145 172.296 103.449 172.296C103.769 172.312 104.049 172.32 104.289 172.32C104.897 172.32 105.313 172.216 105.537 172.008C105.761 171.816 105.913 171.464 105.993 170.952L106.185 169.392H104.865Z',


        },
        {
            value: 'M104.698 171.145L102.353 162.869H104.986L105.799 166.759L106.302 170.028H106.876L107.355 166.759L108.049 162.869H110.682L108.408 171.931C108.281 172.418 108.065 172.814 107.762 173.117C107.459 173.421 107.02 173.641 106.446 173.779C105.871 173.926 105.097 174 104.124 174C103.885 174 103.621 173.991 103.334 173.972C103.047 173.954 102.776 173.936 102.52 173.917V172.786C102.728 172.805 102.983 172.814 103.286 172.814C103.605 172.823 103.885 172.828 104.124 172.828C104.73 172.828 105.145 172.768 105.369 172.648C105.592 172.538 105.744 172.336 105.823 172.041L106.015 171.145H104.698Z'

        },
        {
            value: 'M104.865 169.392L102.513 154.992H105.153L105.969 161.76L106.473 167.448H107.049L107.529 161.76L108.225 154.992H110.865L108.585 170.76C108.457 171.608 108.241 172.296 107.937 172.824C107.633 173.352 107.193 173.736 106.617 173.976C106.041 174.232 105.265 174.36 104.289 174.36C104.049 174.36 103.785 174.344 103.497 174.312C103.209 174.28 102.937 174.248 102.681 174.216V172.248C102.889 172.28 103.145 172.296 103.449 172.296C103.769 172.312 104.049 172.32 104.289 172.32C104.897 172.32 105.313 172.216 105.537 172.008C105.761 171.816 105.913 171.464 105.993 170.952L106.185 169.392H104.865Z',


        }

    ],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 2500,


});

anime({
    targets: '#l',
    d: [{
            value: 'M112.51 169.392V150.192H115.126V169.392H112.51Z',


        },
        {
            value: 'M112.323 171.145V160.11H114.932V171.145H112.323Z'

        },
        {
            value: 'M112.51 169.392V150.192H115.126V169.392H112.51Z',


        }

    ],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 3000,


});

anime({
    targets: '#e',
    d: [{
            value: 'M122.642 164.136H125.162C125.178 164.36 125.186 164.656 125.186 165.024C125.202 165.392 125.202 165.72 125.186 166.008C125.138 167.288 124.818 168.208 124.226 168.768C123.65 169.312 122.698 169.584 121.37 169.584C120.01 169.584 119.018 169.312 118.394 168.768C117.786 168.208 117.45 167.288 117.386 166.008C117.37 165.544 117.354 164.984 117.338 164.328C117.338 163.656 117.338 162.96 117.338 162.24C117.338 161.52 117.338 160.824 117.338 160.152C117.354 159.48 117.37 158.904 117.386 158.424C117.466 157.128 117.81 156.2 118.418 155.64C119.042 155.08 120.018 154.8 121.346 154.8C122.658 154.8 123.61 155.072 124.202 155.616C124.81 156.16 125.138 157.064 125.186 158.328C125.202 158.536 125.21 158.872 125.21 159.336C125.226 159.8 125.226 160.328 125.21 160.92C125.21 161.496 125.194 162.072 125.162 162.648H119.954C119.954 163.24 119.954 163.832 119.954 164.424C119.97 165.016 119.986 165.632 120.002 166.272C120.002 166.768 120.106 167.12 120.314 167.328C120.538 167.52 120.89 167.616 121.37 167.616C121.802 167.616 122.114 167.52 122.306 167.328C122.514 167.12 122.626 166.768 122.642 166.272C122.674 165.76 122.674 165.048 122.642 164.136ZM121.346 156.768C120.866 156.768 120.522 156.872 120.314 157.08C120.106 157.272 120.002 157.592 120.002 158.04C119.986 158.552 119.97 159.032 119.954 159.48C119.954 159.912 119.954 160.352 119.954 160.8H122.666C122.682 160.16 122.682 159.592 122.666 159.096C122.666 158.6 122.658 158.248 122.642 158.04C122.626 157.592 122.514 157.272 122.306 157.08C122.114 156.872 121.794 156.768 121.346 156.768Z',


        },
        {
            value: 'M122.427 168.124H124.94C124.956 168.253 124.964 168.423 124.964 168.634C124.98 168.846 124.98 169.034 124.964 169.2C124.916 169.936 124.597 170.464 124.007 170.786C123.432 171.099 122.483 171.255 121.159 171.255C119.802 171.255 118.813 171.099 118.191 170.786C117.584 170.464 117.249 169.936 117.185 169.2C117.17 168.933 117.154 168.611 117.138 168.234C117.138 167.848 117.138 167.448 117.138 167.034C117.138 166.621 117.138 166.221 117.138 165.834C117.154 165.448 117.17 165.117 117.185 164.841C117.265 164.097 117.608 163.563 118.215 163.241C118.837 162.92 119.81 162.759 121.135 162.759C122.443 162.759 123.392 162.915 123.983 163.228C124.589 163.54 124.916 164.06 124.964 164.786C124.98 164.906 124.988 165.099 124.988 165.366C125.004 165.632 125.004 165.936 124.988 166.276C124.988 166.607 124.972 166.938 124.94 167.269H119.746C119.746 167.609 119.746 167.949 119.746 168.29C119.762 168.63 119.778 168.984 119.794 169.352C119.794 169.637 119.898 169.839 120.105 169.959C120.329 170.069 120.68 170.124 121.159 170.124C121.589 170.124 121.901 170.069 122.092 169.959C122.299 169.839 122.411 169.637 122.427 169.352C122.459 169.057 122.459 168.648 122.427 168.124ZM121.135 163.89C120.656 163.89 120.313 163.949 120.105 164.069C119.898 164.179 119.794 164.363 119.794 164.621C119.778 164.915 119.762 165.191 119.746 165.448C119.746 165.697 119.746 165.949 119.746 166.207H122.451C122.467 165.839 122.467 165.513 122.451 165.228C122.451 164.943 122.443 164.74 122.427 164.621C122.411 164.363 122.299 164.179 122.092 164.069C121.901 163.949 121.581 163.89 121.135 163.89Z'

        },
        {
            value: 'M122.642 164.136H125.162C125.178 164.36 125.186 164.656 125.186 165.024C125.202 165.392 125.202 165.72 125.186 166.008C125.138 167.288 124.818 168.208 124.226 168.768C123.65 169.312 122.698 169.584 121.37 169.584C120.01 169.584 119.018 169.312 118.394 168.768C117.786 168.208 117.45 167.288 117.386 166.008C117.37 165.544 117.354 164.984 117.338 164.328C117.338 163.656 117.338 162.96 117.338 162.24C117.338 161.52 117.338 160.824 117.338 160.152C117.354 159.48 117.37 158.904 117.386 158.424C117.466 157.128 117.81 156.2 118.418 155.64C119.042 155.08 120.018 154.8 121.346 154.8C122.658 154.8 123.61 155.072 124.202 155.616C124.81 156.16 125.138 157.064 125.186 158.328C125.202 158.536 125.21 158.872 125.21 159.336C125.226 159.8 125.226 160.328 125.21 160.92C125.21 161.496 125.194 162.072 125.162 162.648H119.954C119.954 163.24 119.954 163.832 119.954 164.424C119.97 165.016 119.986 165.632 120.002 166.272C120.002 166.768 120.106 167.12 120.314 167.328C120.538 167.52 120.89 167.616 121.37 167.616C121.802 167.616 122.114 167.52 122.306 167.328C122.514 167.12 122.626 166.768 122.642 166.272C122.674 165.76 122.674 165.048 122.642 164.136ZM121.346 156.768C120.866 156.768 120.522 156.872 120.314 157.08C120.106 157.272 120.002 157.592 120.002 158.04C119.986 158.552 119.97 159.032 119.954 159.48C119.954 159.912 119.954 160.352 119.954 160.8H122.666C122.682 160.16 122.682 159.592 122.666 159.096C122.666 158.6 122.658 158.248 122.642 158.04C122.626 157.592 122.514 157.272 122.306 157.08C122.114 156.872 121.794 156.768 121.346 156.768Z',


        }

    ],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 3500,


});


window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    setTimeout(function () {
        loader.className += " gone";
    }, 3000);

});
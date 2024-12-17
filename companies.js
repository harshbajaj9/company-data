const parsedCompanies = [
  {
    "name": "Google",
    "code": "google",
    "domain": "https://www.google.com/about/careers/applications/jobs/results",
    "boards": [
      {
        "title": "Google Careers",
        "url": "https://www.google.com/about/careers/applications/jobs/results"
      },
      {
        "title": "instahyre",
        "url": "https://www.instahyre.com/jobs-at-google-2/"
      },
      {
        "title": "LinkedIn",
        "url": "https://www.linkedin.com/company/google/jobs"
      },
      {
        "title": "Indeed",
        "url": "https://www.indeed.com/cmp/Google/jobs"
      },
      {
        "title": "GLASSDOOR",
        "url": "https://www.glassdoor.com/Jobs/Google-Jobs-E9079.htm"
      },
      {
        "title": "naukri",
        "url": "https://www.naukri.com/google-jobs"
      },
      {
        "title": "X",
        "url": "https://x.com/jobs?cname=google"
      }
    ]
  },
  {
    "name": "Meta",
    "code": "meta",
    "domain": "https://www.metacareers.com/jobs/",
    "boards": [
      {
        "url": "https://www.metacareers.com/jobs/",
        "title": "Meta Careers"
      },
      {
        "url": "https://www.linkedin.com/company/meta/jobs",
        "title": "LinkedIn"
      },
      {
        "url": "https://www.indeed.com/cmp/Meta-dd1502f2/jobs",
        "title": "indeed"
      },
      {
        "url": "https://www.glassdoor.com/Jobs/Meta-Jobs-E40772.htm",
        "title": "GLASSDOOR"
      },
      {
        "url": "https://www.naukri.com/meta-platforms-jobs-careers-632697",
        "title": "naukri"
      }
    ]
  },
  {
    "name": "Amazon",
    "code": "amazon",
    "domain": "https://www.amazon.jobs/en/search",
    "boards": [
      {
        "title": "amazon jobs",
        "url": "https://www.amazon.jobs/en/search"
      },
      {
        "title": "LinkedIn",
        "url": "https://www.linkedin.com/company/amazon/jobs"
      },
      {
        "title": "indeed",
        "url": "https://www.indeed.com/cmp/Amazon.com/jobs"
      },
      {
        "title": "GLASSDOOR",
        "url": "https://www.glassdoor.com/Jobs/Amazon-Jobs-E6036.htm"
      },
      {
        "title": "naukri",
        "url": "https://www.naukri.com/amazon-jobs"
      },
      {
        "title": "instahyre",
        "url": "https://www.instahyre.com/jobs-at-amazon/"
      },
      {
        "title": "Wellfound",
        "url": "https://wellfound.com/company/amazon/jobs"
      },
      {
        "title": "AmbitionBox",
        "url": "https://www.ambitionbox.com/jobs/amazon-jobs-cmp"
      }
    ]
  },
  {
    "name": "Microsoft",
    "code": "microsoft",
    "domain": "https://jobs.careers.microsoft.com/global/en/search",
    "boards": [
      {
        "url": "https://jobs.careers.microsoft.com/global/en/search",
        "title": "Microsoft Careers"
      },
      {
        "url": "https://www.linkedin.com/company/microsoft/jobs",
        "title": "LinkedIn"
      },
      {
        "url": "https://www.indeed.com/cmp/Microsoft/jobs",
        "title": "indeed"
      },
      {
        "url": "https://www.glassdoor.com/Jobs/Microsoft-Jobs-E1651.htm",
        "title": "GLASSDOOR"
      },
      {
        "url": "https://www.naukri.com/microsoft-jobs",
        "title": "naukri"
      },
      {
        "url": "https://www.instahyre.com/jobs-at-microsoft-2/",
        "title": "instahyre"
      },
      {
        "url": "https://wellfound.com/company/microsoft/jobs",
        "title": "Wellfound"
      }
    ]
  },
  {
    "name": "Apple",
    "code": "apple",
    "domain": "https://jobs.apple.com/search",
    "boards": [
      {
        "url": "https://jobs.apple.com/search",
        "title": "Jobs at Apple"
      },
      {
        "url": "https://www.linkedin.com/company/apple/jobs",
        "title": "LinkedIn"
      },
      {
        "url": "https://www.indeed.com/cmp/Apple/jobs",
        "title": "indeed"
      },
      {
        "url": "https://www.glassdoor.com/Jobs/Apple-Jobs-E1138.htm",
        "title": "GLASSDOOR"
      },
      {
        "url": "https://www.naukri.com/apple-jobs",
        "title": "naukri"
      }
    ]
  },
  {
    "name": "Uber",
    "code": "uber",
    "domain": "https://www.uber.com/careers/list",
    "boards": [
      {
        "url": "https://www.uber.com/careers/list",
        "title": "Uber Careers"
      },
      {
        "url": "https://www.linkedin.com/company/uber-com/jobs",
        "title": "LinkedIn"
      },
      {
        "url": "https://www.indeed.com/cmp/Uber/jobs",
        "title": "indeed"
      },
      {
        "url": "https://www.glassdoor.com/Jobs/Uber-Jobs-E575263.htm",
        "title": "GLASSDOOR"
      },
      {
        "url": "https://www.naukri.com/uber-jobs",
        "title": "naukri"
      },
      {
        "url": "https://www.instahyre.com/jobs-at-uber/",
        "title": "instahyre"
      }
    ]
  },
  {
    "name": "Tesla",
    "code": "tesla",
    "domain": "https://www.tesla.com/careers/search/?site=US",
    "boards": [
      {
        "url": "https://www.tesla.com/careers/search/?site=US",
        "title": "Tesla Careers"
      },
      {
        "url": "https://www.linkedin.com/company/tesla-motors/jobs",
        "title": "LinkedIn"
      },
      {
        "url": "https://www.indeed.com/cmp/Tesla/jobs",
        "title": "indeed"
      },
      {
        "url": "https://www.glassdoor.com/Jobs/Tesla-Jobs-E43129.htm",
        "title": "GLASSDOOR"
      }
    ]
  },
  {
    "name": "LinkedIn",
    "code": "linkedin",
    "domain": "https://careers.linkedin.com/WhyLinkedIn",
    "boards": [
      {
        "title": "LinkedIn Careers",
        "url": "https://careers.linkedin.com/WhyLinkedIn"
      },
      {
        "title": "LinkedIn",
        "url": "https://www.linkedin.com/company/linkedin/jobs"
      },
      {
        "title": "GLASSDOOR",
        "url": "https://www.glassdoor.com/Jobs/LinkedIn-Jobs-E34865.htm"
      }
    ]
  },
  {
    "name": "Stripe",
    "code": "stripe",
    "domain": "https://stripe.com/jobs/search",
    "boards": [
      {
        "url": "https://stripe.com/jobs/search",
        "title": "Stripe JOBS"
      },
      {
        "url": "https://www.linkedin.com/company/stripe/jobs",
        "title": "LinkedIn"
      },
      {
        "url": "https://www.naukri.com/stripe-jobs",
        "title": "naukri"
      }
    ]
  }
];
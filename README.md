# NHS_GP
Exploring GP practices in England with open data from NHS digital


`data/`
1. GP_imd_Oct_2025.csv 
- Downloaded from Fingertips_API https://fingertips.phe.org.uk/api#/Data by querying indicator id 94240. 
- From Fingertips explanation: For GP deprivation scores, the population weighting is based on NHS Digital, Patients Registered at a GP Practice - October 2025: LSOA file (persons). 
By knowing how many patients live in which LSOAs (proportions of the accounted-for total list size) a weighted average of the LSOA IMD scores can be built as GP IMD score. 
- IMD reference https://www.gov.uk/government/statistics/english-indices-of-deprivation-2025

2. General Practice - June 2026 Individual Level.csv
- Downloaded from NHS digital https://digital.nhs.uk/data-and-information/publications/statistical/general-and-personal-medical-services/30-june-2026
- To know individual GP country of qualification and FTE

3. General Practice - June 2026 Practice Level - Detailed.csv
- Downloaded from NHS digital https://digital.nhs.uk/data-and-information/publications/statistical/general-and-personal-medical-services/30-june-2026
- To know total number of GP and patients registered at each GP surgey


Research Questions:
1. Where do foreign trained GP work in terms of IMD area
2. Do diversity of GP composition in a GP match with its patient diversity?

///
3. do diversity correlates with IMD



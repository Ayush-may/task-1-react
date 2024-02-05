import React, { useState } from 'react'
import Card from './Card'

const CardCombination = () => {

    const [data, setData] = useState([
        {
            type : '✍️ Article',
            bigImage : 'https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FimPf2MohsDUMJ3V0S24lqwDaAEOOj470agcv6GPPtVgiUoti7day5XdYte5yvaWTsLSIb3Aby6-a90ZPezIz7jRUAHoHCDbml~kW-kDXzDi8bO4FfAe69krGvVlQDTBo0pZq8L97M846XeJn9xTJlZx0sUJoKA4kTMqHr142fBju3M9VG~u6424HJNLBiTam7EabFxQOAilxEAYTeTU6iFuGnf96j~SrBQsXmpdKUlF7daQ25ht1M~n-j-odCeO9SmOv9IN8V5E0tP2R0sUWoi~H5tHFPTcVcWEHsrNR6iuNAO32vLhszmiSqeRNnHWjdaym7BkAnSDqBWojsJdhw__',
            bigText : 'What if famous brands had regular fonts? Meet RegulaBrands!',
            smallText : 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
            profile : {
                img : 'https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrEmo-Jdxbvg2wi8lzxeZh19QFeq4grJOB7~3hmFMNt6NtVdLmGSMgOUm-juWtdzCSJnFOECaEQqstpaYt1v5fThmP8OujSCxvsEUSJ2ToKZ2QvXgvAEreZ0KLwuLVjUQvpfjx~0-xsxxdfgAV7XlUZAZYuTkbViecdS4cJA3bsWGrxJEnvvLJ3zCHoDY6MIA6~hiwDkFYtGTTtINbCt84bmGmtaPwVkq8fRnZavqVvRaDT3-p-8lQ7sHhFxJeZTNT03p0CzIpqWBaOrLToroN2yJjI-tQWaDXc7Zzw1P4JhsExPnfmOn16r4Xqn5wNCYYr6AqtbesDq-~CoU7rhXg__',
                name : 'Sarthak Kamra'
            }
        },
        {
            type : '🔬️ Education',
            bigImage : 'https://s3-alpha-sig.figma.com/img/250a/24fe/c8e32137d06a7bb3fd57b6dfb4e07bfe?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fA6AoeaScezeriQzbjQVjKYMnFXc4Wj1THZ-74aV6STs0S0nT3v3TFU3eRO~iiL02el-Z2noPIXTw6-N3C9~g~Cf79YsPFBJgdZo84IbV5E3-d~Vluzbb25--IBYnFXFBvhQMP2v7AbOD3h3Uuyo626iwl19bn8SXhIBM-D-VOBNo3g5q58m1vzakx4SDfkbL290BMPyfQU2lK97ywmc2kXf-U06k-TZ6gvB27fujKVwtVWuJK3qQfGB8P1iVsW5zs98gZ2H5gG2vqFQBP5mB8M9lHOt9rXiH4L-JTiC-y6WQDfz5ieMV~RrQ1FewSBv8jY8RmB-pzKx9FeZWrts1g__',
            bigText : 'Tax Benefits for Investment under National Pension Scheme launched by Government',
            smallText : 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
            profile : {
                img : 'https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o3iK5lEWV1ED9BTVfgOW5Wc5AhX6BTAT~saVTufcdW9uaaAKu6i2UEsK-8zw7u8cciib~PJZgyzIKRfvzVOdp6lnSughRkFQsAsdhlb9lFUIsILzxDIoiQ1rzIeq1C26jXq4fVZyZ2OQVskxr5yo6c~xkKA7ZjB4~I4dn46J3dk3Cj9O6TwQzkFP-rSTXODq68yAu47zmCqzRLdS2AUDmhMpxixi2j3w9aebxZ1aIgtKnkR3fFYmq3WS8t9Lm3oTDnVG1cr7U1w3Z-2mwTNNgWg9TLyWoi9ZM4-52mx9MNQC8XsSi2EhIbf0HLwRXAQDahZhOtqiQ62FR9u0sVZYyg__',
                name : 'Sarah West'
            }
        }
    ]);

  return (
    <>
        <Card data={data} />
    </>
  )
}

export default CardCombination
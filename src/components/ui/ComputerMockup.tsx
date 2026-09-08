interface ComputerMockupProps {
  imageUrl?: string;
  className?: string;
}

const ComputerMockup = ({ imageUrl, className = "w-full h-auto max-w-full" }: ComputerMockupProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="936"
      height="752"
      viewBox="0 0 936 752"
      fill="none"
      className={className}
      style={{ aspectRatio: "936 / 752", height: "auto" }}
    >
      <defs>
        <clipPath id="screenClip">
          <rect x="39.4316" y="44.209" width="854.8124" height="480.193" />
        </clipPath>
      </defs>

      <mask id="mask0_633_5974" maskUnits="userSpaceOnUse" x="0" y="0" width="936" height="566" style={{ maskType: "luminance" }}>
        <path d="M0 0H935.474V566H0V0Z" fill="white" />
      </mask>

      <g mask="url(#mask0_633_5974)">
        <mask id="mask1_633_5974" maskUnits="userSpaceOnUse" x="0" y="0" width="935" height="566" style={{ maskType: "luminance" }}>
          <path
            d="M892.339 0H42.6094C19.0781 0 0 19.0833 0 42.6146V565.109H934.948V42.6146C934.948 19.0833 915.87 0 892.339 0ZM894.245 524.401H39.4323V44.2083H894.245V524.401Z"
            fill="white"
          />
        </mask>

        <g mask="url(#mask1_633_5974)">
          <path d="M0 0H934.755V750.667H0V0Z" fill="black" />
        </g>
      </g>

      {imageUrl && (
        <image
          href={imageUrl}
          x="39.4316"
          y="44.209"
          width="854.8124"
          height="480.193"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#screenClip)"
        />
      )}

      <mask id="mask2_633_5974" maskUnits="userSpaceOnUse" x="0" y="564" width="936" height="89" style={{ maskType: "luminance" }}>
        <path d="M0 564.984H935.474V652.667H0V564.984Z" fill="white" />
      </mask>

      <g mask="url(#mask2_633_5974)">
        <mask id="mask3_633_5974" maskUnits="userSpaceOnUse" x="0" y="565" width="935" height="88" style={{ maskType: "luminance" }}>
          <path
            d="M0 609.786C0 633.323 19.0781 652.401 42.6094 652.401H892.339C915.87 652.401 934.948 633.323 934.948 609.786V565.266H0V609.786Z"
            fill="white"
          />
        </mask>

        <g mask="url(#mask3_633_5974)">
          <path d="M0 0H934.755V750.667H0V0Z" fill="#E9E9E9" />
        </g>
      </g>

      <mask id="mask4_633_5974" maskUnits="userSpaceOnUse" x="304" y="652" width="327" height="100" style={{ maskType: "luminance" }}>
        <path d="M304.709 652.271H630.048V751.334H304.709V652.271Z" fill="white" />
      </mask>

      <g mask="url(#mask4_633_5974)">
        <mask id="mask5_633_5974" maskUnits="userSpaceOnUse" x="304" y="652" width="326" height="99" style={{ maskType: "luminance" }}>
          <path
            d="M461.752 652.402H360.944C360.944 652.402 357.918 698.835 354.741 718.23C349.173 751.465 315.147 740.809 305.449 747.803C304.179 748.762 304.814 750.829 306.403 750.829H628.231C629.819 750.829 630.455 748.762 629.184 747.803C619.486 740.809 585.46 751.465 579.892 718.23C576.71 698.835 573.689 652.402 573.689 652.402H461.752Z"
            fill="white"
          />
        </mask>

        <g mask="url(#mask5_633_5974)">
          <path d="M0.00195312 0.00195312H934.757V750.669H0V0.00195312Z" fill="#BBBBBB" />
        </g>
      </g>
    </svg>
  );
};

export default ComputerMockup;
import FooterData from "../../api/FooterData.json"
export const Footer = () => {
  return <footer className="hs-XqwWvWI-9fbaed67630hs-XqwWvWI- bg-gray-900 hs-XqwWvWI-9fbaed6763hs-XqwWvWI- hs-XqwWvWI-ab997318e00hs-XqwWvWI- text-gray-300 hs-XqwWvWI-ab997318e0hs-XqwWvWI- hs-XqwWvWI-f078c1d5da0hs-XqwWvWI- py-6 hs-XqwWvWI-f078c1d5dahs-XqwWvWI- hs-XqwWvWI-72c0f452240hs-XqwWvWI- px-16 hs-XqwWvWI-72c0f45224hs-XqwWvWI- hs-XqwWvWI-8cb2b0c3610hs-XqwWvWI- tracking-wide hs-XqwWvWI-8cb2b0c361hs-XqwWvWI-">
  <div className="hs-XqwWvWI-3d6352d7c11hs-XqwWvWI- flex hs-XqwWvWI-3d6352d7c1hs-XqwWvWI- hs-XqwWvWI-eb51b4f07e1hs-XqwWvWI- justify-between hs-XqwWvWI-eb51b4f07ehs-XqwWvWI- hs-XqwWvWI-ea739b21e91hs-XqwWvWI- items-center hs-XqwWvWI-ea739b21e9hs-XqwWvWI- hs-XqwWvWI-2ad469b0c91hs-XqwWvWI- max-lg:flex-col hs-XqwWvWI-2ad469b0c9hs-XqwWvWI- hs-XqwWvWI-c863c6c2db1hs-XqwWvWI- text-center hs-XqwWvWI-c863c6c2dbhs-XqwWvWI- hs-XqwWvWI-845d7e779e1hs-XqwWvWI- flex-wrap hs-XqwWvWI-845d7e779ehs-XqwWvWI- hs-XqwWvWI-339d06dade1hs-XqwWvWI- gap-4 hs-XqwWvWI-339d06dadehs-XqwWvWI-">
    <p className="hs-XqwWvWI-0df6d273b32hs-XqwWvWI- text-[15px] hs-XqwWvWI-0df6d273b3hs-XqwWvWI- hs-XqwWvWI-e2bbfd0d112hs-XqwWvWI- leading-loose hs-XqwWvWI-e2bbfd0d11hs-XqwWvWI-">© CountryData. All rights reserved.</p>

    <ul className="hs-XqwWvWI-fe30967b3a3hs-XqwWvWI- flex hs-XqwWvWI-fe30967b3ahs-XqwWvWI- hs-XqwWvWI-c17eec8f3e3hs-XqwWvWI- space-x-6 hs-XqwWvWI-c17eec8f3ehs-XqwWvWI- hs-XqwWvWI-af501e73283hs-XqwWvWI- gap-y-2 hs-XqwWvWI-af501e7328hs-XqwWvWI- hs-XqwWvWI-82466100803hs-XqwWvWI- max-lg:justify-center hs-XqwWvWI-8246610080hs-XqwWvWI- hs-XqwWvWI-f61d6850273hs-XqwWvWI- flex-wrap hs-XqwWvWI-f61d685027hs-XqwWvWI-">
      {FooterData.map((footer)=>(
        <li key={footer.id}><a href="javascript:void(0)" className="hs-XqwWvWI-92c0e2bc634hs-XqwWvWI- text-[15px] hs-XqwWvWI-92c0e2bc63hs-XqwWvWI- hs-XqwWvWI-5dc259123e4hs-XqwWvWI- hover:text-white hs-XqwWvWI-5dc259123ehs-XqwWvWI-">{footer.icon} {footer.title}</a></li>
      ))}
      </ul>
  </div>
</footer>;
};

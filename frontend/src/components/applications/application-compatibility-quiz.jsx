

const CompatibilityQuizComponent = ({ user_id }) => {
return (
    <div className="d-flex w-40 h-auto m-5 p-3 pb-5 px-5 bg-cream flex-column align-items-center rounded two-col-child">
    
    {/* Title */}
        <h1 className="fs-0">Compatability Quiz</h1>
    {/* Title */}

    {/* Questions */}
    <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
        <div className="col-12">
            <p className="mb-0">I am looking to adopt for</p>
        </div>
        <div className="col-12">
        <select
        className="form-select form-select-sm font-plain w-auto border border-0"
        aria-label="Default select example"
        >
        <option selected="">(required)</option>
        <option value="myself">myself</option>
        <option value="my family">my family</option>
        </select>
        </div>
        </form>
        <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
        <div className="col-12">
        <p className="mb-0">I have</p>
        </div>
        <div className="col-12">
        <select
        className="form-select form-select-sm font-plain w-auto border border-0"
        aria-label="Default select example"
        >
        <option selected="">(required)</option>
        <option value="kids">kids</option>
        <option value="no kids">no kids</option>
        </select>
        </div>
        <div className="col-12">
        <p className="mb-0">at home</p>
        </div>
        </form>
        <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
        <div className="col-12">
        <p className="mb-0">I am a</p>
        </div>
        <div className="col-12">
        <select
        className="form-select form-select-sm font-plain w-auto border border-0"
        aria-label="Default select example"
        >
        <option selected="">(required)</option>
        <option value="previous">previous</option>
        <option value="first-time">first-time</option>
        </select>
        </div>
        <div className="col-12">
        <p className="mb-0">pet owner</p>
        </div>
        </form>
        <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
        <div className="col-12">
        <p className="mb-0">I currently have</p>
        </div>
        <div className="col-12">
        <select
        className="form-select form-select-sm font-plain w-auto border border-0"
        aria-label="Default select example"
        >
        <option selected="">(required)</option>
        <option value="none">no pet(s)</option>
        <option value="cat">cat(s)</option>
        <option value="dog">dog(s)</option>
        <option value="both">dog(s) and cat(s)</option>
        <option value="other">other pet(s)</option>
        </select>
        </div>
    </form>
    <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
    <div className="col-12">
    <p className="mb-0">My ideal pet is a(n)</p>
    </div>
    <div className="col-12">
    <select
    className="form-select form-select-sm font-plain w-auto border border-0"
    aria-label="Default select example"
    >
    <option selected="">(no age preference)</option>
    <option value="newborn">newborn</option>
    <option value="young">young</option>
    <option value="adult">adult</option>
    <option value="senior">senior</option>
    </select>
    </div>
    </form>
    <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
    <div className="col-12">
    <p className="mb-0">I would like to adopt a</p>
    </div>
    <div className="col-12">
    <select
    className="form-select form-select-sm font-plain w-auto border border-0"
    aria-label="Default select example"
    >
    <option selected="">(no gender preference)</option>
    <option value="female">female</option>
    <option value="male">male</option>
    </select>
    </div>
    </form>
    <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
    <div className="col-12">
    <p className="mb-0">I prefer a pet that is</p>
    </div>
    <div className="col-12">
    <select
    className="form-select form-select-sm font-plain w-auto border border-0"
    aria-label="Default select example"
    >
    <option selected="">(no size preference)</option>
    <option value="small">small</option>
    <option value="medium">medium</option>
    <option value="large">large</option>
    <option value="extra large">extra large</option>
    </select>
    </div>
    </form>
    <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
    <div className="col-12">
    <p className="mb-0">My pet's behaviour should be</p>
    </div>
    <div className="col-12">
    <select
    className="form-select form-select-sm font-plain w-auto border border-0"
    aria-label="Default select example"
    >
    <option selected="">(no behaviour preference)</option>
    <option value="very active">very active</option>
    <option value="active">active</option>
    <option value="laid-back">laid-back</option>
    <option value="lap-pet">lap-pet</option>
    </select>
    </div>
    </form>
    <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
    <div className="col-12">
    <p className="mb-0">I am</p>
    </div>
    <div className="col-12">
    <select
    className="form-select form-select-sm font-plain w-auto border border-0"
    aria-label="Default select example"
    >
    <option selected="">(required)</option>
    <option value="open">open</option>
    <option value="not open">not open</option>
    </select>
    </div>
    <div className="col-12">
    <p className="mb-0">to adopting a pet with special needs</p>
    </div>
    </form>
    <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
    <div className="col-12">
    <p className="mb-0">I live in a(n)</p>
    </div>
    <div className="col-12">
    <select
    className="form-select form-select-sm font-plain w-auto border border-0"
    aria-label="Default select example"
    >
    <option selected="">(required)</option>
    <option value="house">house</option>
    <option value="condominium">condominium</option>
    <option value="apartment">apartment</option>
    <option value="townhouse">townhouse</option>
    <option value="other">other</option>
    </select>
    </div>
    <div className="col-12">
    <p className="mb-0">that is</p>
    </div>
    <div className="col-12">
    <select
    className="form-select form-select-sm font-plain w-auto border border-0"
    aria-label="Default select example"
    >
    <option selected="">(required)</option>
    <option value="own">own</option>
    <option value="rent">rent</option>
    </select>
    </div>
    </form>
    <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
    <div className="col-12">
    <p className="mb-0">The pet will be kept</p>
    </div>
    <div className="col-12">
    <select
    className="form-select form-select-sm font-plain w-auto border border-0"
    aria-label="Default select example"
    >
    <option selected="">(required)</option>
    <option value="indoors">indoors</option>
    <option value="outdoors">outdoors</option>
    </select>
    </div>
    </form>
    <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
    <div className="col-12">
    <p className="mb-0">I have</p>
    </div>
    <div className="col-12">
    <select
    className="form-select form-select-sm font-plain w-auto border border-0"
    aria-label="Default select example"
    >
    <option selected="">(required)</option>
    <option value="none">no</option>
    <option value="fenced">a fenced</option>
    <option value="un-fenced">an un-fenced</option>
    </select>
    </div>
    <div className="col-12">
    <p className="mb-0">yard</p>
    </div>
    </form>
    {/* Questions */}
    <div className="m-5 mb-0 form-floating w-100 h-100">
    <textarea
    className="form-control border border-0 h-100"
    placeholder="Leave additional inquiries here"
    id="additionalInquiries"
    defaultValue={""}
    />
    <label htmlFor="additionalInquiries">Additional Inquiries</label>
    </div>
    </div>
    );
};
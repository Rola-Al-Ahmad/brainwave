import { check } from "../../../assets";
import { collabContent } from "../../../constants";
import Button from "../../../components/Button";

const CollaborationContent = () => {
  return (
    <div className="max-w-[25rem]">
      <h2 className="h2 mb-4 md:mb-8">
        AI Chat App for seamless collaboration
      </h2>
      <ul
        role="list"
        className="max-w-[22rem] mb-10 md:mb-14"
        aria-label="List of collaboration features"
      >
        {collabContent.map((content) => (
          <li
            role="listitem"
            className="mb-3 py-3"
            key={content.id}
            aria-labelledby={`collab-title-${content.id}`}
          >
            <div className="flex items-center">
              <img
                src={check}
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
                loading="lazy"
              />
              <h6 className="ml-5 body-2" id={`collab-title-${content.id}`}>
                {content.title}
              </h6>
            </div>
            {content.text && (
              <p className="body-2 mt-3 text-n-4">{content.text}</p>
            )}
          </li>
        ))}
      </ul>
      <Button ariaLabel="Try it now">Try it now</Button>
    </div>
  );
};

export default CollaborationContent;

interface Resource {
  getResourceType(): string;
  getName(): string;
  getId(): string | number | undefined;
};

export default Resource;

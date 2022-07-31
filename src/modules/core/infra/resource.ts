interface Resource {
  getResourceType(): string;
  getName(): string;
  getId(): string | number;
};

export default Resource;

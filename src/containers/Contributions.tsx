"use client";

import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import "./Contributions.scss";

const contributions = [
  {
    title: "EC2 DescribeInstanceStatus health checks in the interruption controller",
    repo: "aws/karpenter-provider-aws",
    pr: "#9064",
    description:
      "Added support for EC2 Status Checks via the DescribeInstanceStatus API, allowing the interruption controller to detect Instance/System/EBS health issues not available through EventBridge alone.",
    link: "https://github.com/aws/karpenter-provider-aws/pull/9064",
    tags: ["Go", "Kubernetes", "AWS"],
  },
  {
    title: "Grace period for do-not-disrupt annotation",
    repo: "kubernetes-sigs/karpenter",
    pr: "#2874",
    description:
      "Allowed the karpenter.sh/do-not-disrupt pod annotation to accept a time.Duration, preventing disruption for a configurable grace period from pod start instead of permanently.",
    link: "https://github.com/kubernetes-sigs/karpenter/pull/2874",
    tags: ["Go", "Kubernetes"],
  },
  {
    title: "InstanceMatchCriteria for CapacityReservationSelectorTerms",
    repo: "aws/karpenter-provider-aws",
    pr: "#8544",
    description:
      "Added support for filtering Capacity Reservations by instance match criteria ('open' or 'targeted') in EC2NodeClass selector terms.",
    link: "https://github.com/aws/karpenter-provider-aws/pull/8544",
    tags: ["Go", "Kubernetes", "AWS"],
  },
  {
    title: "Video metadata and overlay support for Snapchat memories",
    repo: "ToTheMax/Snapchat-All-Memories-Downloader",
    pr: "#108",
    description:
      "Added date/time/location metadata for videos and overlay support for images and videos in the Snapchat memories export downloader.",
    link: "https://github.com/ToTheMax/Snapchat-All-Memories-Downloader/pull/108",
    tags: ["Python"],
  },
];

const Contributions = () => {
  return (
    <>
      <h2 className="head-text">
        Open Source <span>Contributions</span>
      </h2>

      <div className="app__contributions-container">
        <div className="app__contributions-sidebar">
          <p className="app__contributions-intro">
            Here are some of my notable open source contributions to the
            Kubernetes ecosystem and beyond. I primarily work on{" "}
            <a href="https://karpenter.sh/" target="_blank" rel="noreferrer">Karpenter</a>, a
            node lifecycle management project for Kubernetes.
          </p>
          <div className="app__contributions-more">
            <span className="app__contributions-more-label">See more:</span>
            <a
              href="https://github.com/aws/karpenter-provider-aws/pulls?q=is%3Apr+author%3AAndrewMitchell25"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub /> AWS Karpenter PRs &rarr;
            </a>
            <a
              href="https://github.com/kubernetes-sigs/karpenter/pulls?q=is%3Apr+author%3AAndrewMitchell25"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub /> Upstream Karpenter PRs &rarr;
            </a>
          </div>
        </div>
        <div className="app__contributions-list">
          <div className="app__contributions-line" />
          {contributions.map((item, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="app__contributions-item"
              key={item.title}
            >
              <div className="app__contributions-card">
                <div className="app__contributions-header">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="app__contributions-title"
                  >
                    {item.title}
                  </a>
                  <span className="app__contributions-pr">{item.pr}</span>
                </div>
                <p className="app__contributions-repo">{item.repo}</p>
                <p className="app__contributions-desc">{item.description}</p>
                <div className="app__contributions-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contributions;

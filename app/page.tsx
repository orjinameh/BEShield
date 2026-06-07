
"use client";

import {
  Shield,
  AlertTriangle,
  Users,
  CheckCircle,
  Lock,
  Zap,
  FileText,
  Globe,
  TrendingUp,
  ArrowRight,
  Database,
  Activity,
  Layers,
  Download,
  ExternalLink,
  Mail,
} from "lucide-react";

export default function Home() {
  return (
    <div style={{ color: "#111", background: "#fff" }}>

      {/* NAV */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 40px", borderBottom: "1px solid #f0f0f0",
        position: "sticky", top: 0, zIndex: 100, background: "#fff"
      }}>
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <div style={{
            width: 28, height: 28, background: "linear-gradient(135deg,#00bcd4,#0097a7)",
            borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <Shield size={16} color="#fff" />
          </div>
          <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: "-0.3px", color: "#111" }}>BEShield</span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <a href="#architecture" style={{ fontSize: 13, color: "#555", fontWeight: 500, textDecoration: "none" }}>View Architecture</a>
          <a href="#research" style={{ fontSize: 13, color: "#555", fontWeight: 500, textDecoration: "none" }}>Research Paper</a>
          <a href="#get-started" style={{
            fontSize: 13, color: "#fff", fontWeight: 600, textDecoration: "none",
            background: "#00bcd4", padding: "7px 16px", borderRadius: 7
          }}>Get Started</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px 60px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "60px" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "#f0fafb", border: "1px solid #b2ebf2", borderRadius: 20,
              padding: "4px 12px", marginBottom: 24, fontSize: 11, color: "#0097a7", fontWeight: 600
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00bcd4" }} />
              Enterprise BEC Prevention
            </div> */}

            <h1 style={{ fontSize: 46, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 20 }}>
              Stop Business<br />
              Email Compromise<br />
              with{" "}
              <span style={{ color: "#00bcd4" }}>AI</span>
              <br />
              <span style={{ color: "#00bcd4" }}>Consensus</span>
            </h1>

            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, maxWidth: 440, marginBottom: 32 }}>
              BEShield employs a Byzantine Fault Tolerant architecture to eliminate single points of failure in payment approvals. Specialized AI nodes reach consensus on every transaction, secured by Stellar.
            </p>

            <div style={{ display: "flex", gap: 12 }}>
              <a href="#architecture" style={{
                background: "#111", color: "#fff", padding: "10px 20px",
                borderRadius: 8, fontSize: 13, fontWeight: 600,
                display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none"
              }}>
                View Architecture <ArrowRight size={14} />
              </a>
              <a href="#research" style={{
                background: "#fff", color: "#111", padding: "10px 20px",
                borderRadius: 8, fontSize: 13, fontWeight: 600,
                border: "1px solid #e5e5e5", textDecoration: "none"
              }}>
                Read Research
              </a>
            </div>
          </div>

          {/* Hero Card */}
          <div style={{
            width: 320, flexShrink: 0, border: "1px solid #e5e5e5",
            borderRadius: 14, padding: "20px", background: "#fff",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)"
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: "#111" }}>Consensus Active</span>
              </div>
              <span style={{ fontSize: 11, color: "#888", background: "#f5f5f5", padding: "2px 8px", borderRadius: 10 }}>Secure Layer</span>
            </div>
            <p style={{ fontSize: 11, color: "#888", marginBottom: 16 }}>Monitoring Incoming Request...</p>

            {[1, 2, 3].map((i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "10px 0", borderTop: i > 1 ? "1px solid #f0f0f0" : "none"
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ height: 8, width: i === 1 ? 120 : i === 2 ? 90 : 100, background: "#f0f0f0", borderRadius: 4 }} />
                  <div style={{ height: 6, width: i === 1 ? 80 : i === 2 ? 60 : 70, background: "#f8f8f8", borderRadius: 4 }} />
                </div>
                <CheckCircle size={16} color="#22c55e" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 40px", display: "flex", gap: 60 }}>
          {[
            { icon: <AlertTriangle size={18} color="#f59e0b" />, value: "$2.9B+", label: "ANNUAL BEC LOSSES" },
            { icon: <Users size={18} color="#555" />, value: "$125k", label: "AVG. LOSS PER ATTACK" },
            { icon: <Shield size={18} color="#555" />, value: "84%", label: "UNPROTECTED ORGANIZATIONS" },
          ].map((stat, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {stat.icon}
              <div>
                <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.5px" }}>{stat.value}</div>
                <div style={{ fontSize: 10, color: "#888", fontWeight: 600, letterSpacing: "0.5px" }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE CRISIS OF TRUST */}
      <section id="problem" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.8px", marginBottom: 12 }}>The Crisis of Trust</h2>
        <p style={{ fontSize: 14, color: "#555", maxWidth: 560, lineHeight: 1.7, marginBottom: 48 }}>
          Existing BEC defenses are reactive, relying on blocklists or single-agent heuristics. Once an attacker gains internal access, they bypass standard security layers with ease.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 40 }}>
          {[
            {
              icon: <Lock size={20} color="#111" />,
              title: "Single-Point Trust",
              desc: "Traditional approaches rely on a single person or automated rule, creating a catastrophic point of failure if compromised.",
            },
            {
              icon: <Layers size={20} color="#111" />,
              title: "Siloed Intelligence",
              desc: "Fraud checks often happen in isolation, missing the holistic pattern of a sophisticated multi-stage phishing attack.",
            },
            {
              icon: <Users size={20} color="#111" />,
              title: "Human Vulnerability",
              desc: "Even trained approvers can be social-engineered. BEShield removes the emotional variable from the high-stakes decision path.",
            },
          ].map((item, i) => (
            <div style={{border: "1px solid #bbbbbb60", borderRadius: 12, background: "#fff", padding: "24px"}} key={i}>
              <div style={{ marginBottom: 12 }}>{item.icon}</div>
              <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BYZANTINE FAULT TOLERANT ARCHITECTURE */}
      <section id="architecture" style={{ background: "#fafafa", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.8px", marginBottom: 12 }}>
              Byzantine Fault Tolerant AI Architecture
            </h2>
            <p style={{ fontSize: 14, color: "#555", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              Our multi-agent system ensures that even if one node is tricked or compromised, the consensus remains secure.
            </p>
          </div>

          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            {/* Payment Request */}
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                border: "1px solid #e5e5e5", borderRadius: 8, padding: "10px 20px",
                background: "#fff", fontSize: 13, fontWeight: 600
              }}>
                <FileText size={14} color="#555" />
                PAYMENT REQUEST RECEIVED
              </div>
              <div style={{ margin: "8px auto", width: 1, height: 20, background: "#ddd" }} />
            </div>

            {/* AI Consensus Layer */}
            <div style={{ border: "1px solid #00bcd4", borderRadius: 12, background: "#fff", padding: "24px" }}>
              <div style={{ marginBottom: 16 }}>
                <span style={{
                  fontSize: 10, fontWeight: 700, color: "#0097a7", letterSpacing: "0.5px",
                  background: "#e0f7fa", padding: "3px 10px", borderRadius: 12
                }}>
                  AI Consensus Layer
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12, marginBottom: 24 }}>
                {[
                  { icon: <Globe size={18} />, title: "Domain & Header Analysis", desc: "Analyzes email sender authentication and SPF/DKIM/DMARC alignment." },
                  { icon: <Activity size={18} />, title: "Behavioral Pattern", desc: "Compares current request against historical employee timing and habits." },
                  { icon: <Database size={18} />, title: "Bank Verification", desc: "Cross-references global fraud databases and internal verified supplier registries." },
                  { icon: <FileText size={18} />, title: "Language & Tone", desc: "Linguistic analysis of urgency, sentiment, and characteristic phrasing." },
                  { icon: <TrendingUp size={18} />, title: "Transactional Logic", desc: "Evaluates value outliers and frequency spikes or contextually anomalous spending." },
                ].map((node, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, background: "#f5f5f5",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 10px", color: "#555"
                    }}>
                      {node.icon}
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 4, lineHeight: 1.3 }}>{node.title}</div>
                    <div style={{ fontSize: 10, color: "#888", lineHeight: 1.4 }}>{node.desc}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "center", marginBottom: 0 }}>
                <div style={{ width: 1, height: 20, background: "#ddd" }} />
              </div>

              {/* Consensus Engine */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{
                  background: "#1a1a2e", color: "#fff", borderRadius: 12,
                  padding: "14px 28px", textAlign: "center", minWidth: 180
                }}>
                  <div style={{ marginBottom: 6, display: "flex", justifyContent: "center" }}>
                    <Shield size={20} color="#00bcd4" />
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>Consensus Engine</div>
                  <div style={{ fontSize: 10, color: "#aaa", marginTop: 2 }}>BFT THRESHOLD: ≥ 4/5</div>
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div style={{ marginTop: 20, display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
              <div style={{ textAlign: "center", flex: 1 }}>
                <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>Verified Decision</div>
                <div style={{ fontSize: 12, fontWeight: 700 }}>Consensus Reached</div>
                <div style={{ fontSize: 10, color: "#888" }}>Payment Approved by Majority</div>
              </div>

              <div style={{
                background: "#00bcd4", color: "#fff", borderRadius: 12,
                padding: "12px 20px", textAlign: "center", minWidth: 120
              }}>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.5px", marginBottom: 2 }}>STELLAR</div>
                <div style={{ fontSize: 10, opacity: 0.85 }}>BLOCKCHAIN LEDGER</div>
              </div>

              <div style={{ textAlign: "center", flex: 1 }}>
                <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>Immutable Audit Trail</div>
                <div style={{ fontSize: 12, fontWeight: 700 }}>On-Chain Evidence</div>
                <div style={{ fontSize: 10, color: "#888" }}>TX Hash: 0x8a4...d9fa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STELLAR ATTESTATION */}
      <section id="stellar" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px" }}>
        <div style={{ display: "flex", gap: 60, alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.8px", marginBottom: 12 }}>
              Why Stellar Attestation?
            </h2>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 32, maxWidth: 440 }}>
              Every decision made by the BEShield consensus engine is hashed and anchored to the Stellar network. This creates a permanent, tamper-proof record for regulators and auditors.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                {
                  icon: <Lock size={16} color="#00bcd4" />,
                  title: "Immutable Audit Trails",
                  desc: "Decisions cannot be retroactively altered by attackers or internal bad actors.",
                },
                {
                  icon: <Zap size={16} color="#00bcd4" />,
                  title: "Lightning Fast Finality",
                  desc: "Transactions settle in seconds, matching the speed of modern business workflows.",
                },
                {
                  icon: <TrendingUp size={16} color="#00bcd4" />,
                  title: "Low Operational Cost",
                  desc: "Stellar's low transaction fees make high-volume attestation economically viable.",
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8, background: "#e0f7fa",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Blockchain log card */}
          <div style={{
            width: 300, flexShrink: 0, background: "#0f1117",
            borderRadius: 12, padding: "20px", color: "#fff"
          }}>
            <div style={{ marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: "#aaa", letterSpacing: "0.5px" }}>
                BT-BLOCKCHAIN-LOG.291
              </span>
            </div>

            <div style={{ fontFamily: "monospace", fontSize: 11, color: "#7dd3fc", lineHeight: 2 }}>
              <div><span style={{ color: "#94a3b8" }}>"timestamp":</span> <span style={{ color: "#86efac" }}>"2024-01-07 04:07:44..."</span></div>
              <div><span style={{ color: "#94a3b8" }}>"consensus_id":</span> <span style={{ color: "#fbbf24" }}>"BFT-SHA512-V1-9M...</span></div>
              <div><span style={{ color: "#94a3b8" }}>"nodes_consulted":</span> <span style={{ color: "#c4b5fd" }}>5</span></div>
              <div><span style={{ color: "#94a3b8" }}>"nodes_in_agreement":</span> <span style={{ color: "#c4b5fd" }}>4</span></div>
              <div><span style={{ color: "#94a3b8" }}>"majority_threshold":</span> <span style={{ color: "#c4b5fd" }}>"≥ 4/5"</span></div>
              <div><span style={{ color: "#94a3b8" }}>"vote_ledger":</span> <span style={{ color: "#86efac" }}>"VERIFIED"</span></div>
              <div><span style={{ color: "#94a3b8" }}>"status":</span> <span style={{ color: "#86efac" }}>"AUTHENTIC"</span></div>
            </div>

            <div style={{ marginTop: 16, fontSize: 10, color: "#666" }}>
              Example metadata representation of an on-chain BEC decision
            </div>
          </div>
        </div>
      </section>

      {/* SCIENTIFIC FOUNDATION + LED BY INNOVATION */}
      <section id="research" style={{ background: "#fafafa", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
            {/* Scientific Foundation */}
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 24 }}>
                Scientific Foundation
              </h2>
              <div style={{
                border: "1px solid #e5e5e5", borderRadius: 12, padding: "20px",
                background: "#fff", display: "flex", gap: 14
              }}>
                <div style={{
                  width: 36, height: 36, background: "#f5f5f5", borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                }}>
                  <FileText size={16} color="#555" />
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Technical Whitepaper</div>
                  <p style={{ fontSize: 12, color: "#666", lineHeight: 1.6, marginBottom: 16, fontStyle: "italic" }}>
                    "Byzantine Fault Tolerant Architectures in Generative AI Decision Chains for BEC Prevention"
                  </p>
                  <p style={{ fontSize: 12, color: "#666", lineHeight: 1.6, marginBottom: 16 }}>
                    Our core research outlines the mathematical proofs behind using adapted consensus for linguistic and behavioral heuristics in enterprise email security.
                  </p>
                  <div style={{ display: "flex", gap: 12 }}>
                    <a
                      href="https://zenodo.org/records/20577665"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        fontSize: 12, fontWeight: 600, color: "#555",
                        background: "none", border: "1px solid #e5e5e5",
                        borderRadius: 6, padding: "6px 12px", textDecoration: "none"
                      }}
                    >
                      <ExternalLink size={12} /> View DOI Publication
                    </a>
                    <a
                      href="https://zenodo.org/records/20577665/files/research%20paper.pdf?download=1"
                      download
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        fontSize: 12, fontWeight: 600, color: "#555",
                        background: "none", border: "1px solid #e5e5e5",
                        borderRadius: 6, padding: "6px 12px", textDecoration: "none"
                      }}
                    >
                      <Download size={12} /> Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Led by Innovation */}
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 24 }}>
                Led by Innovation
              </h2>
              <div style={{
                border: "1px solid #e5e5e5", borderRadius: 12, padding: "20px",
                background: "#fff", display: "flex", gap: 14
              }}>
                <div style={{
                  width: 48, height: 48, background: "#f5f5f5", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                }}>
                  <Users size={20} color="#555" />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2 }}>Peter Everhacher-Stephen</div>
                  <div style={{ fontSize: 11, color: "#888", marginBottom: 10 }}>Chief Architect & Security Researcher</div>
                  <p style={{ fontSize: 12, color: "#666", lineHeight: 1.6, marginBottom: 14 }}>
                    Peter is a pioneer in decentralized trust systems with over 15 years in cybersecurity. His work focuses on bridging the gap between distributed systems theory and practical implementation for fintech security.
                  </p>
                  <div style={{ display: "flex", gap: 10 }}>
                    <a
                      href="https://www.linkedin.com/in/peter-stephen-87784b231/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: 28, height: 28, background: "#f5f5f5", borderRadius: 6,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        textDecoration: "none"
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#555"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a
                      href="https://x.com/OrjinamehOla"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: 28, height: 28, background: "#f5f5f5", borderRadius: 6,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        textDecoration: "none"
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#555"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px", textAlign: "center" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-1px", marginBottom: 12 }}>
            Ready to Secure Your Payment Approval Chain?
          </h2>
          <p style={{ fontSize: 14, color: "#555", marginBottom: 28 }}>
            Join 500+ enterprises leveraging BEShield for secure approvals.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 20 }}>
            <a href="mailto:peterstephen22000@gmail.com" style={{
              background: "#00bcd4", color: "#fff", padding: "12px 28px",
              borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: "none"
            }}>
              Get Started
            </a>
            <a href="mailto:peterstephen22000@gmail.com?subject=Demo%20Request" style={{
              background: "#fff", color: "#111", padding: "12px 28px",
              borderRadius: 8, fontSize: 14, fontWeight: 600,
              border: "1px solid #e5e5e5", textDecoration: "none"
            }}>
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#fafafa", borderTop: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 40px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
            <div>
              <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, textDecoration: "none" }}>
                <div style={{
                  width: 24, height: 24, background: "linear-gradient(135deg,#00bcd4,#0097a7)",
                  borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <Shield size={13} color="#fff" />
                </div>
                <span style={{ fontWeight: 700, fontSize: 14, color: "#111" }}>BEShield</span>
              </a>
              <p style={{ fontSize: 12, color: "#666", lineHeight: 1.7, maxWidth: 260 }}>
                Protecting organizations from BEC through decentralized AI consensus and Stellar blockchain attestation.
              </p>
            </div>

            <div>
              <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 14, letterSpacing: "0.3px" }}>Resources</div>
              {[
                { label: "Architecture", href: "#architecture" },
                { label: "Research Paper", href: "https://zenodo.org/records/20577665/files/research%20paper.pdf?download=1" },
                { label: "DOI Publication", href: "https://zenodo.org/records/20577665" },
              ].map((item) => (
                <div key={item.label} style={{ fontSize: 12, color: "#666", marginBottom: 10 }}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ color: "#666", textDecoration: "none" }}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>

            <div>
              <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 14, letterSpacing: "0.3px" }}>Contact</div>
              <a
                href="mailto:peterstephen22000@gmail.com"
                style={{ fontSize: 12, color: "#666", display: "flex", alignItems: "center", gap: 6, marginBottom: 8, textDecoration: "none" }}
              >
                <Mail size={12} /> peterstephen22000@gmail.com
              </a>
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 28, height: 28, background: "#fff", border: "1px solid #e5e5e5",
                    borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center",
                    textDecoration: "none"
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#555"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a
                  href="https://x.com/OrjinamehOla"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 28, height: 28, background: "#fff", border: "1px solid #e5e5e5",
                    borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center",
                    textDecoration: "none"
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#555"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 11, color: "#aaa" }}>© 2025 BEShield. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
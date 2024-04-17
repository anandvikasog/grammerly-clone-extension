"use client"

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "400px",
        width: "300px",
        border: "2px solid #10B981",
      }}
    >
      <div>
        <h2>Grammerly extension POC</h2>
        <div
          style={{ border: "1px solid #E5E7EB", marginBottom: "10px" }}
        ></div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="showOnSelection">Show on text selection </label>
          <input
            id="showOnSelectionYes"
            name="selection"
            type="radio"
            style={{ marginRight: "5px" }}
          />
          <label htmlFor="showOnSelectionYes">Yes</label>
          <input
            id="showOnSelectionNo"
            name="selection"
            type="radio"
            style={{ marginRight: "5px", marginLeft: "10px" }}
          />
          <label htmlFor="showOnSelectionNo">No</label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="languageInput">I write in </label>
          <select id="languageInput" style={{ marginLeft: "5px" }}>
            <option>American English</option>
            <option>Indian English</option>
          </select>
        </div>
        <a
          className="text-blue-500"
          href={`${process.env.NEXT_PUBLIC_APP_URl}/editor`}
          target="_blank"
          style={{ color: "#3B82F6", textDecoration: "none" }}
        >
          My Grammerly
        </a>
      </div>
    </div>
  );
}

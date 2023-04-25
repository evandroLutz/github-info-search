function copyToClipboard(string: string): Promise<void> {
    return navigator.clipboard.writeText(string);
}
  
export default copyToClipboard;